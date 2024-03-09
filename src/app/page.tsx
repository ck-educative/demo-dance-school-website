import Hero from '@/components/Hero';
import Image from 'next/image';


export default function Home() {
  return (
      <div style={{ position:"fixed" ,width: "100%",height:"100%"}}>
      <Image
        src="/image_01.png"
        alt="Vercel Logo"
        objectFit='cover'
        fill={true}
        priority
      />
      <Hero/> 
      </div>
  );
}
