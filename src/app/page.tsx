'use client';

import { Section } from '@/components/Section';
import {
  Text,
  TitleSection,
  WrapperAboutMe,
  WrapperContacts,
  WrapperHome,
  WrapperPhotos,
  WrapperProducts
} from '@/styles/commonStyles';
import Image from 'next/image';
import Logo from '../../public/assets/logo.png';
import Lencois1 from '../../public/assets/lencois1.jpg';
import Lencois2 from '../../public/assets/lencois2.jpg';
import Lencois3 from '../../public/assets/lencois3.jpg';
import Slider from 'react-slick';
import useMedia from '@/hooks/useMedia';
import { useMemo } from 'react';

export default function Home() {
  const mobile = useMedia(60);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000
  };

  const settingsProducts = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: mobile ? 1 : 3,
      slidesToScroll: 1
    };
  }, [mobile]);

  return (
    <WrapperHome>
      <Section id="about-me">
        <WrapperAboutMe>
          <div className="description">
            <TitleSection>Sobre mim</TitleSection>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </div>
          <div className="images">
            <Image src={Logo} alt="Logo" width={200} height={200} />
            <Image src={Logo} alt="Logo" width={200} height={200} />
          </div>
        </WrapperAboutMe>
      </Section>
      <Section id="products">
        <WrapperProducts>
          <TitleSection color="white">Serviços</TitleSection>
          <Text color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <div className="content-slider-products">
            <Slider {...settingsProducts}>
              <div className="content-card">
                <div className="card">
                  <Image src={Lencois1} alt="Logo" width={700} height={500} />
                  <div className="description-card">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
              <div className="content-card">
                <div className="card">
                  <Image src={Lencois2} alt="Logo" width={700} height={500} />
                  <div className="description-card">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
              <div className="content-card">
                <div className="card">
                  <Image src={Lencois3} alt="Logo" width={700} height={500} />
                  <div className="description-card">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </WrapperProducts>
      </Section>
      <Section id="contacts">
        <WrapperContacts>
          <TitleSection>Contatos</TitleSection>
        </WrapperContacts>
      </Section>
      <Section id="photos">
        <WrapperPhotos>
          <TitleSection color="white">Fotos</TitleSection>
          <div className="content-slider-photos">
            <Slider {...settings}>
              <div className="content-photo">
                <Image src={Lencois1} alt="Logo" width={700} height={500} />
              </div>
              <div className="content-photo">
                <Image src={Lencois2} alt="Logo" width={700} height={500} />
              </div>
              <div className="content-photo">
                <Image src={Lencois3} alt="Logo" width={700} height={500} />
              </div>
            </Slider>
          </div>
        </WrapperPhotos>
      </Section>
    </WrapperHome>
  );
}
