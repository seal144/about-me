import ExternalLink from './externalLink';

const Footer = () => {
  return (
    <section className="bg-background border-y pt-2 pb-4">
      <div className="container text-center lg:text-left">
        <h2 className="text-xl mb-2 drop-shadow-s">Reach me:</h2>
        <div className="text-secondary lg:flex">
          <p className="drop-shadow-s lg:flex-1">rafalfak8@gmail.com</p>
          <div className="lg:flex-1 lg:text-center lg:border-x-sm">
            <ExternalLink
              label="LinkedIn(rafal-fak)"
              href="https://www.linkedin.com/in/rafal-fak/"
              iconColor="secondary"
            />
          </div>
          <div className="lg:flex-1 lg:text-right">
            <ExternalLink label="Github(seal144)" href="https://github.com/seal144/" iconColor="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
