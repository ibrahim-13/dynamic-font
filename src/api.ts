export type ApiFontData = {
  id: string;
  displayName: string;
  fontUrl: string;
}

export function GetFontFromApi(): Promise<ApiFontData[]> {
  const fontData: ApiFontData[] = [
    { id: '0', displayName: 'Lobster Regular', fontUrl: '/fonts/Lobster-Regular.ttf' },
    { id: '1', displayName: 'Potta One Regular', fontUrl: '/fonts/PottaOne-Regular.ttf' },
    { id: '2', displayName: 'Yusei Magic Regular', fontUrl: '/fonts/YuseiMagic-Regular.ttf' },
  ];
  return Promise.resolve(fontData);
}