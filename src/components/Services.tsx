import { type Service } from "~/lib/sanity.queries";
import Image from "next/image";

export default function Services({services}: {services: Service[]}) {
  return (
    <div>
      <p className="mt-3 text-xl text-gray-600">
        Thank you for visiting my site. Here are the services that we offer!
      </p>  
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Services
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length && (
          services.map((service) => (
            <div key={service._id} className="border border-gray-500 rounded-lg p-3">
              {service.image && (
                <Image 
                  className="object-cover rounded-lg border border-gray-500"
                  src={service.image} 
                  alt={service.name}
                  width={250}
                  height={100}
                />
              )}
              <div className="font-extrabold">{service.name}</div>
            </div>
          ))
        )}
      </div>
    </div>     
  )
}
