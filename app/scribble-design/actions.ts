'use server';

export async function scribbleDesign({
  base64Image,
  prompt,
}: {
  base64Image: string | null;
  prompt: string;
}) {
  const response = await fetch(
    'http://localhost:4000/ai-images/scribble-design',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Image, prompt }),
    }
  );

  const result = await response.json();

  return result;
}
