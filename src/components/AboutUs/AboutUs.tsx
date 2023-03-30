import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import React from 'react';
import './AboutUs.scss';

export const AboutUs = () => {
  const ourSuccess = [
    ['Студентів', '15К+'],
    ['Позитивних відгуків', '87%'],
    ['Курсів', '35'],
    ['Менторів', '25'],
    ['Років досвіду', '16'],
  ];

  const swiperImages = [
    'img/about-us-1.png',
    'img/about-us-2.png',
    'img/about-us-3.jpg',
  ];

  return (
    <section
      className="about-us"
    >
      <div className="container">
        <div className="about-us__content">
          <div className="about-us__block">
            <Typography
              variant="h4"
            >
              Наші досягнення
            </Typography>

            <div className="about-us__analitics">
              {ourSuccess.map(item => (
                <div
                  key={item[0]}
                  className="about-us__analitic-item"
                >
                  <div
                    className="about-us__analitic-value"
                  >
                    {item[1]}
                  </div>

                  <Typography
                    variant="h6"
                  >
                    {item[0]}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="about-us__block">
            <div className="about-us__title">
              <Typography
                variant="h4"
                sx={{
                  color: '#2F327D',
                  fontWeight: '500',
                  display: 'inline-block',
                  marginRight: '10px',
                }}
              >
                Що таке
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: '#49BBBD',
                  fontWeight: '500',
                  display: 'inline-block',
                }}
              >
                ЕВРИКА?
              </Typography>
            </div>

            <div
              className="about-us__what-is"
            >
              <p
                className="about-us__text"
              >
                ЕВРИКА — це платформа, яка дозволяє викладачам проводити заняття онлайн,
                за допомогою яких вони можуть зберігати матеріали курсу онлайн;
                керувати завданнями, тестами та іспитами; стежити за термінами;
                оцінювати результати та надавати учням відгуки в одному місці.
                <br />
                Класи мають динамічний набір навчальних інструментів, створених для
                використання під час уроку.
                Ментори можуть роздавати завдання в режимі реального часу,
                щоб учні їх виконували та надсилали.
              </p>

              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop
                  navigation
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {swiperImages.map(img => (
                    <SwiperSlide
                      key={img}
                    >
                      <img src={img} alt="swiper img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
