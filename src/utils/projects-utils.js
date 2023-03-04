export const generateRandomHeight = () => {
  const heights = [
    'h-[275px]',
    'h-[300px]',
    'h-[325px]',
    'h-[350px]',
    'h-[375px]',
    'h-[400px]',
    'h-[425px]',
    'h-[450px]',
  ];

  const randomElement = heights[Math.floor(Math.random() * heights.length)];
  return randomElement;
};
