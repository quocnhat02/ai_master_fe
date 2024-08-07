'use server';

export async function removeBackground(base64Image: string | null) {
  const response = await fetch(
    'http://localhost:4000/ai-images/remove-background',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Image }),
    }
  );

  const result = await response.json();

  return result;
}
