import { type Service } from "~/lib/sanity.queries";
import Image from "next/image";
import Link from "next/link";

export default function Services({services}: {services: Service[]}) {
  return (
    <div>
      <p className="mt-3 text-xl text-gray-600">
        I'm a certified yoga instructor. I've been practicing yoga for over 10 years, and teaching for 5 years. I love sharing the benefits of yoga with my students, such as improved flexibility, strength, balance, and mental clarity. My classes are suitable for all levels, from beginners to advanced. I teach a variety of styles, such as hatha, vinyasa, yin, and restorative. Whether you want to relax, energize, or challenge yourself, I have a class for you. Join me on the mat and discover the joy of yoga!
      </p>  
      <h2 className="mt-20 font-bold text-gray-700 text-3xl">
        My Services
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length && (
          services.map((service) => (
            <Link 
              key={service._id} 
              href={`/services/${service.slug}`}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {service.image && (
                <Image 
                  className="object-cover rounded-lg border border-gray-500"
                  src={service.image} 
                  alt={service.name}
                  width={750}
                  height={300}
                />
              )}
              <div className="mt-2 font-extrabold">{service.name}</div>
            </Link>
          ))
        )}
      </div>
    </div>     
  )
}
