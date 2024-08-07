'use server';

export async function interiorDesign({
  base64Image,
  room,
  theme,
}: {
  base64Image: string | null;
  theme: string;
  room: string;
}) {
  const response = await fetch(
    'http://localhost:4000/ai-images/interior-design',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: base64Image,
        theme,
        room,
      }),
    }
  );

  const result = await response.json();

  return result;
}
