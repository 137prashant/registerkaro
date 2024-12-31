// app/api/testConnection/route.js
import supabase from '../../../lib/supabase';

export async function GET() {
  try {
    // Fetch all companies
    const { data: companies, error: companiesError } = await supabase
      .from('companies')
      .select('*');

    if (companiesError) {
      return new Response(
        JSON.stringify({ error: 'Error fetching companies', details: companiesError }),
        { status: 500 }
      );
    }

    // Fetch directors for each company
    const directorsPromises = companies.map(async (company) => {
      const { data: directors, error: directorsError } = await supabase
        .from('directors')
        .select('*')
        .eq('company_id', company.id); // Assuming `company_id` links to companies

      if (directorsError) {
        console.error('Error fetching directors for company:', company.id);
        return { companyId: company.id, directors: [] };
      }

      return { companyId: company.id, directors };
    });

    const directors = await Promise.all(directorsPromises);

    // Combine companies and directors
    const companiesWithDirectors = companies.map((company) => {
      const companyDirectors = directors.find((d) => d.companyId === company.id)?.directors || [];
      return { ...company, directors: companyDirectors };
    });

    return new Response(JSON.stringify(companiesWithDirectors), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error }), {
      status: 500,
    });
  }
}
