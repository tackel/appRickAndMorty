if (!process.env.SUPABASE_URL) {
  console.log(
    'constants.ts',
    'Make sure you have a `.env` file to populate your variables.',
  );
}
if (process.env.REACT_NATIVE_SUPABASE_URL) {
  console.log(`${process.env.REACT_NATIVE_SUPABASE_URL}`);
}

export const SUPABASE_URL = 'https://wbdelgwscixxpkwqrtrk.supabase.co' || '';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjM5NjU3NSwiZXhwIjoxOTUxOTcyNTc1fQ.jLx9IXH0dz4kUAcmvH1fQojLciMcT5XzXwBJySX-Sfo' ||
  '';
