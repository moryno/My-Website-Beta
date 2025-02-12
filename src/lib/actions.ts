export const getBlogs = async () => {
  const res = await fetch(
    `https://v1.nocodeapi.com/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}/medium/PHtfQEsSFTiKhnUV`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data || [];
};
