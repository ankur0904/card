import React from "react";

function About(){
    return (
      <div className="font-inter flex flex-col justify-center items-center text-center gap-y-10 mt-10 max-w-[700px] mx-auto px-10 mb-10">
        <header>
          <h1 className="text-5xl font-bold">About Us</h1>
        </header>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to bridge the gap between individuals with diverse
            backgrounds and aspirations. We believe that everyone has a unique
            story to tell and that by sharing these stories, we can inspire,
            connect, and collaborate with one another to achieve remarkable
            things.
          </p>
        </section>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">What Sets Us Apart</h2>
          <p className="text-gray-600">
            What makes our platform truly special is the incorporation of
            stunning SVG images associated with each user. These images not only
            add a visually appealing element to the cards but also provide a
            glimpse into the personality and interests of the featured
            individuals.
          </p>
        </section>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Why We Exist</h2>
          <p className="text-gray-600">
            We exist because we are passionate about human stories. We believe
            that every person is on a journey, and every journey is worth
            sharing. Whether you're an aspiring developer, an artist, an
            entrepreneur, or someone with a dream, we want to give you a voice
            and a platform to express yourself.
          </p>
        </section>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to create a global community where individuals can
            connect, learn from each other, and collaborate on meaningful
            projects. We want to foster an environment where diversity is
            celebrated, ideas are shared, and dreams are supported.
          </p>
        </section>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Meet the Team</h2>
          <p className="text-gray-600">
            We are a dedicated team of developers, designers, and dreamers who
            have come together to create this platform. Each one of us is driven
            by a shared passion for technology, creativity, and the belief that
            the power of connection can change lives.
          </p>
        </section>
        <section className=" flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Get Involved</h2>
          <p className="text-gray-600">
            We invite you to explore our platform, discover the incredible
            stories of our featured users, and connect with them. If you're
            interested in sharing your own story or becoming a part of our
            growing community, we encourage you to reach out. Together, we can
            build a brighter future where dreams become reality.
          </p>
        </section>
      </div>
    );
}

export default About;