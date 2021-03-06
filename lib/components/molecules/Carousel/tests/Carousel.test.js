import React from 'react';

import { mountWithTheme } from '../../../../../__mock__/themeMock';
import { CarouselVanilla } from '../index';

describe('<Carousel />', () => {
  let CarouselComponent = '';

  beforeEach(() => {
    CarouselComponent = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
  });

  it('should render correctly', () => {
    expect(CarouselComponent).toMatchSnapshot();
  });

  it('should have slider wrapper as one child only', () => {
    expect(CarouselComponent.find('.carousel-section')).toHaveLength(1);
  });

  it('Children should have first slide as active initially', () => {
    expect(
      CarouselComponent.find('.carousel-section').find('.slide').at(0).hasClass('active')
    ).toEqual(true);
    expect(
      CarouselComponent.find('.carousel-section').find('.slide').at(1).hasClass('active')
    ).toEqual(false);
  });

  it('Should display dots on using <Carousel.Dots> component only', () => {
    let DotsComponent = mountWithTheme(
      <CarouselVanilla dots={false}>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    expect(DotsComponent.exists('.carousel-dots')).toBe(false);
    DotsComponent = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Dots />
      </CarouselVanilla>
    );
    expect(DotsComponent.exists('.carousel-dots')).toBe(true);
  });

  it('Should change slide on click dots', () => {
    const CarouselWithDots = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Dots />
      </CarouselVanilla>
    );
    CarouselWithDots.find('.carousel-dots').find('button').at(3).simulate('click');
    expect(
      CarouselWithDots.find('.carousel-section').find('.slide').at(3).hasClass('active')
    ).toEqual(true);
  });

  it('Should active next slide on click next', () => {
    const CarouselWithDots = mountWithTheme(
      <CarouselVanilla controls>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Dots />
      </CarouselVanilla>
    );
    CarouselWithDots.find('.next').find('button').simulate('click');
    expect(
      CarouselWithDots.find('.carousel-section').find('.slide').at(1).hasClass('active')
    ).toEqual(true);
  });

  it('Should active previous slide on key press right arrow', () => {
    const CarouselWithDots = mountWithTheme(
      <CarouselVanilla controls autoplay={false}>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    CarouselWithDots.find('.next').find('button').simulate('keyup', { key: 'ArrowRight' });
    expect(
      CarouselWithDots.find('.carousel-section').find('.slide').at(1).hasClass('active')
    ).toEqual(true);
  });

  it('Should active previous slide on click previous', () => {
    const CarouselWithDots = mountWithTheme(
      <CarouselVanilla controls>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Dots />
      </CarouselVanilla>
    );
    CarouselWithDots.find('.next').find('button').simulate('click');
    CarouselWithDots.find('.next').find('button').simulate('click');
    CarouselWithDots.find('.prev').find('button').simulate('click');
    expect(
      CarouselWithDots.find('.carousel-section').find('.slide').at(1).hasClass('active')
    ).toEqual(true);
  });

  it('Should active previous slide on key press left', () => {
    const CarouselWithDots = mountWithTheme(
      <CarouselVanilla controls>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>TEst 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Dots />
      </CarouselVanilla>
    );
    CarouselWithDots.find('.next').find('button').simulate('keyup', { key: 'ArrowRight' });
    CarouselWithDots.find('.next').find('button').simulate('keyup', { key: 'ArrowRight' });
    CarouselWithDots.find('.prev').find('button').simulate('keyup', { key: 'ArrowLeft' });
    expect(
      CarouselWithDots.find('.carousel-section').find('.slide').at(1).hasClass('active')
    ).toEqual(true);
  });

  it('Should display controls extract from Component', () => {
    let CarouselWithNav = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    expect(CarouselWithNav.exists('.prev')).toBe(false);
    expect(CarouselWithNav.exists('.next')).toBe(false);

    CarouselWithNav = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.Prev>prev</CarouselVanilla.Prev>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    expect(CarouselWithNav.exists('.prev')).toBe(true);
    expect(CarouselWithNav.exists('.next')).toBe(false);

    CarouselWithNav = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>TEst 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Next>next</CarouselVanilla.Next>
      </CarouselVanilla>
    );
    expect(CarouselWithNav.exists('.prev')).toBe(false);
    expect(CarouselWithNav.exists('.next')).toBe(true);
  });

  it('Should be responsive', () => {
    const resp = [
      { breakpoint: '360', settings: { itemsPerSlide: '1' } },
      { breakpoint: '480', settings: { itemsPerSlide: '2' } },
    ];

    const CarouselWithNav = mountWithTheme(
      <CarouselVanilla responsive={resp}>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 3 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );

    expect(CarouselWithNav.find('.slide')).toHaveLength(3);
  });

  it('Should render Controls with Controls Component', () => {
    const Carousel = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Controls />
      </CarouselVanilla>
    );
    expect(Carousel.find('.carousel-controls')).toHaveLength(1);
  });

  it('Should render Animation Controls', () => {
    const Carousel = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.AnimationController />
      </CarouselVanilla>
    );
    expect(Carousel.find('.animation-panel')).toHaveLength(1);
    Carousel.find('.animation-panel button').simulate('click');
    expect(Carousel.find('.animation-panel button').text()).toEqual('pause');
  });

  it('Should render pause after click play animation controls', () => {
    const Carousel = mountWithTheme(
      <CarouselVanilla>
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
        <CarouselVanilla.AnimationController />
      </CarouselVanilla>
    );

    Carousel.find('.animation-panel button').simulate('click');
    expect(Carousel.find('.animation-panel button').text()).toEqual('pause');
  });

  it('Should autoplay', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    const Carousel = mountWithTheme(
      <CarouselVanilla autoplay="true" slideTransitionTime="1000">
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 2 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    expect(Carousel.find('.carousel-section').find('.slide').at(0).hasClass('active')).toBe(true);
    jest.advanceTimersByTime(1000);
    Carousel.update();
    expect(Carousel.find('.carousel-section').find('.slide').at(1).hasClass('active')).toBe(true);
  });

  it('Should stop animation on mouse enter', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    const Carousel = mountWithTheme(
      <CarouselVanilla autoplay="true" slideTransitionTime="1000">
        <CarouselVanilla.SlideWrapper>
          <CarouselVanilla.Slide>Test 1 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 2 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 3 </CarouselVanilla.Slide>
          <CarouselVanilla.Slide>Test 4 </CarouselVanilla.Slide>
        </CarouselVanilla.SlideWrapper>
      </CarouselVanilla>
    );
    jest.advanceTimersByTime(1000);
    Carousel.update();
    expect(Carousel.find('.carousel-section').find('.slide').at(1).hasClass('active')).toBe(true);
    Carousel.find('.carousel-section').simulate('mouseenter');
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(1000);
    expect(Carousel.find('.carousel-section').find('.slide').at(1).hasClass('active')).toBe(true);
  });
});
