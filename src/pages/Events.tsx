import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const upcomingEvents = [];

  // const pastEvents = [
  //   {
  //     id: 4,
  //     title:
  //       "Annual Conference: Federalism and Governance in 21st Century India",
  //     date: "November 18, 2024",
  //     venue: "Constitution Club of India, New Delhi",
  //     type: "Conference",
  //     description:
  //       "Our flagship annual conference brought together policymakers, academics, and civil society to discuss the evolving nature of federal governance in India.",
  //     attendees: "300+ participants",
  //     outcomes:
  //       "Published proceedings and policy brief on federal governance reforms",
  //   },
  //   {
  //     id: 5,
  //     title: "Panel Discussion: Digital India and the Future of Work",
  //     date: "October 12, 2024",
  //     venue: "Online Event",
  //     type: "Panel Discussion",
  //     description:
  //       "A virtual panel exploring how digital transformation is reshaping India's labor market and the policy responses needed.",
  //     attendees: "500+ participants",
  //     outcomes: "White paper on future of work in digital India",
  //   },
  //   {
  //     id: 6,
  //     title: "Policy Workshop: Urban Governance and Smart Cities",
  //     date: "September 8, 2024",
  //     venue: "Indian Institute of Public Administration, New Delhi",
  //     type: "Workshop",
  //     description:
  //       "A hands-on workshop for urban planners and policymakers on implementing smart city initiatives effectively.",
  //     attendees: "120+ participants",
  //     outcomes: "Best practices manual for smart city implementation",
  //   },
  // ];
  const Events = [
    {
      id: 1,
      image: "/events/event1.png",
    },
    {
      id: 2,
      image: "/events/event2.jpeg",
    },
    {
      id: 3,
      image: "/events/event3.jpeg",
    },
    {
      id: 4,
      image: "/events/event4.jpeg",
    },
    {
      id: 5,
      image: "/events/event5.jpeg",
    },
    {
      id: 6,
      image: "/events/event6.jpeg",
    },
    {
      id: 7,
      image: "/events/event7.jpg",
    },
    {
      id: 8,
      image: "/events/event8.jpg",
    },
    {
      id: 9,
      image: "/events/event9.png",
    },
    {
      id: 10,
      image: "/events/event10.png",
    },
    {
      id: 11,
      image: "/events/event11.png",
    },
    // {
    //   id: 12,
    //   image: "/events/event12.png",
    // },
    {
      id: 13,
      image: "/events/event13.png",
    },
    // {
    //   id: 14,
    //   image: "/events/event14.png",
    // },
    ,
    {
      id: 15,
      image: "/events/event15.jpeg",
    },
    ,
    {
      id: 16,
      image: "/events/event16.jpeg",
    },
    ,
    {
      id: 17,
      image: "/events/event17.jpeg",
    },
    ,
    // {
    //   id: 18,
    //   image: "/events/event18.jpeg",
    // },
    ,
    {
      id: 19,
      image: "/events/event19.jpeg",
    },
  ];

  return (
    <div className="bg-white">
      {/* <img
        src="/Hawa Mahal 2.jpg"
        alt="Decorative banner"
        className="w-full max-w-8xl h-[400px] object-cover"
      /> */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          setApi={setApi}
          className="w-full h-auto"
        >
          <CarouselContent>
            {Events.map((event, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img
                    src={event.image}
                    alt={`Event ${index + 1}`}
                    className="w-full h-[550px] object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows inside the image */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
        </Carousel>
      </div>
      {/* Hero Section */}
      {/* <section className="bg-[#1e293c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our policy dialogues, workshops, and conferences that bring
              together thought leaders, policymakers, and practitioners.
            </p>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
                Events
              </h2>
              <p className="text-xl newpaper-body max-w-3xl mx-auto">
                Mark your calendar for these upcoming policy discussions and
                research presentations.
              </p>
            </div>
            <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-blue-100 text-blue-800">
                        Latest Event
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold newpaper-body mb-4">
                      Reimagining Indian Governance Through Cultural and
                      Technological Lenses
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center newpaper-body">
                        <Calendar className="mr-2 flex-shrink-0" size={16} />
                        <span>June 6-7, 2024</span>
                      </div>
                      <div className="flex items-center newpaper-body">
                        <MapPin className="mr-2 flex-shrink-0" size={16} />
                        <span>
                          Shailesh J. Mehta School of Management (SJMSoM), IIT
                          Bombay
                        </span>
                      </div>
                    </div>
                    <a
                      href="/events/SF Conference Updated3.pdf"
                      download
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <ArrowRight className="mr-2" size={16} />
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full mr-3 ${
                              event.type === "Conference"
                                ? "bg-blue-100 text-blue-800"
                                : event.type === "Workshop"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {event.type}
                          </span>
                          {event.isVirtual && (
                            <span className="px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
                              Virtual Event
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold newpaper-body mb-4">
                          {event.title}
                        </h3>
                        <p className="newpaper-body mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center newpaper-body">
                            <Calendar
                              className="mr-2 flex-shrink-0"
                              size={16}
                            />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center newpaper-body">
                            <Clock className="mr-2 flex-shrink-0" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center newpaper-body">
                            {event.isVirtual ? (
                              <Video className="mr-2 flex-shrink-0" size={16} />
                            ) : (
                              <MapPin
                                className="mr-2 flex-shrink-0"
                                size={16}
                              />
                            )}
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center newpaper-body">
                            <Users className="mr-2 flex-shrink-0" size={16} />
                            <span>{event.capacity}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold newpaper-body mb-2">
                            Featured Speakers:
                          </h4>
                          <ul className="newpaper-body">
                            {event.speakers.map((speaker, index) => (
                              <li
                                key={index}
                                className="flex items-center mb-1"
                              >
                                <div className="w-2 h-2 newpaper-body rounded-full mr-2"></div>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* <div className="lg:ml-8 lg:flex-shrink-0">
                        <button className="bg-teal-600 text-white px-8 py-3 rounded font-medium hover:bg-teal-700 transition-all duration-200 uppercase tracking-wide text-sm hover:shadow-lg inline-flex items-center">
                          Register Now
                          <ArrowRight className="ml-2" size={20} />
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {/* {activeTab === "past" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A look back at our recent policy dialogues and their impact on
                public discourse.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          event.type === "Conference"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "Workshop"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="mr-2 flex-shrink-0" size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="mr-2 flex-shrink-0" size={14} />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="mr-2 flex-shrink-0" size={14} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Outcomes:
                      </h4>
                      <p className="text-gray-700 text-sm">{event.outcomes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
};

export default Events;
