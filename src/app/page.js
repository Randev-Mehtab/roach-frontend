import BTCPrice from '../components/BTCPrice';

export default function Home() {
  return (
    <div className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold">🚀 Roach MK1 is live and working!</h1>
      <BTCPrice />
    </div>
  );
}
