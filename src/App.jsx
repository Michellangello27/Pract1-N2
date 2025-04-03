import Header from './components/Header';
import CrewMember from './components/CrewMember';

const team = [
  { name: 'Bill Mahoney', role: 'Product Owner', image: '/images/photo1.png' },
  { name: 'Saba Cabrera', role: 'Art Director', image: '/images/photo2.png' },
  { name: 'Shae Le', role: 'Tech Lead', image: '/images/photo3.png' },
  { name: 'SkyLah Lu', role: 'UX Designer', image: '/images/photo4.png' },
  { name: 'Griff Richards', role: 'Developer', image: '/images/photo5.png' },
  { name: 'Stan John', role: 'Developer', image: '/images/photo6.png' },
];

export default function App() {
  return (
    <main className="px-6 py-10 md:px-16 md:py-20 text-white bg-[#0B0D17] min-h-screen">
      <Header />
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <CrewMember key={index} {...member} />
        ))}
      </section>
      <footer className="text-center text-sm mt-16 opacity-70 text-white">
        Presentado por <strong>Ángel Cornejo</strong> - FUNVAL
      </footer>
    </main>
  );
}
