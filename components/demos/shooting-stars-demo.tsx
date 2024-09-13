import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Tez yetkazib berish",
    description:
      "Ko'pgina loyihalar uchun 1-2 haftalik yetkazib berish. Qo'shimcha ma'lumot uchun bizga qo'ng'iroq qiling.",
  },
  {
    icon: "/icons/design.svg",
    title: "Dizayn va Rivojlantirish",
    description:
      "Biz veb-saytingizni eng so'nggi texnologiyalar va tendensiyalarga muvofiq dizayn qilib ishlab chiqamiz.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Masshtablash + Texnik xizmat",
    description: "Biz barcha veb-saytlar uchun texnik xizmat va masshtablashni taklif qilamiz.",
  },
  {
    icon: "/icons/team.svg",
    title: "Mutaxassislar jamoasi",
    description: "Har doim yordamga tayyor mutaxassislar jamoasi.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Xavfsiz Qurilish",
    description:
      "Ma'lumotlaringiz xavfsizligini ta'minlash uchun xavfsiz va ishonchli qurilish usullari.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analitik Kuzatuv",
    description: "O'z rivojlanishingizni bizning ichki tahliliy vositalar yordamida kuzating.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Dinamik Veb-saytlar",
    description: "Biz boshqarilishi oson bo'lgan dinamik yechimlar yaratamiz.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Yordam",
    description:
      "Biz barcha mijozlarimiz uchun 24/7 yordam taklif qilamiz. Qo'shimcha ma'lumot uchun bizga qo'ng'iroq qiling.",
  },
  {
    icon: "/icons/money.svg",
    title: "Hamyonbop Narxlar",
    description: "Biz barcha mijozlarimiz uchun hamyonbop narxlarni taklif qilamiz.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Bizning kafolatlarimiz siz uchun.
        <p className="md:text-center mx-auto text-xl md:text-2xl text-gray-200">
          Biz eng yuqori sifatdagi ishlarga, eng tez yetkazib berish vaqtlariga kafolat beramiz.
        </p>
      </h2>

      {/* Xususiyatlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="ikon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
