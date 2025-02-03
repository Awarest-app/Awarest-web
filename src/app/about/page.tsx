import Header from '~/components/Header';
import SectionHeader from '~/components/SectionHeader';
import DescriptionContainer from '~/components/DescriptionContainer';
import DescriptionBox from '~/components/DescriptionBox';
import VisionIcon from '~/components/icons/VisionIcon';
import HeartIcon from '~/components/icons/HeartIcon';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <section className="flex flex-col gap-10 px-4 py-10 @container">
          <SectionHeader
            title="Our Vision &amp; Values"
            content="We are committed to providing a platform for self-discovery and personal growth. Our values guide our decisions and interactions with our community."
          />
          <DescriptionContainer p={0}>
            <DescriptionBox
              title="Vision"
              content="To create a platform that fosters self-discovery and personal growth."
              icon={<VisionIcon />}
            />
            <DescriptionBox
              title="Values"
              content="Authenticity, Empathy, and Continuous Improvement."
              icon={<HeartIcon />}
            />
          </DescriptionContainer>
        </section>
      </div>
      <Footer />
    </>
  );
}
