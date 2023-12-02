import { type Service } from "~/lib/sanity.queries";

export default function Services({services}: {services: Service[]}) {
  return (
    <div className="home__container">
      <>
        {services.length && (
         services.map((service) => <div key={service._id}>{service.name}</div>)
        )}
      </>
    </div>     
  )
}
