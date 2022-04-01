import React, {useState} from 'react';
import {Button} from '@components/ui';
import {AuthorProps} from '@components/Authors/Author';

const AuthorDetail:React.FC<AuthorProps> = ({
    name,
    professionalAuthor,
    rating,
    country,
    languages
                                            }) => {
    const [isShow, setShow] = useState(false);
    const toggleText = () => {
        setShow(!isShow);
    };

    return (
        <div className="author">
            <div className="author__container">
                <div className="author-info">
                    <div className="author-info__items">
                        <div className="author-info__item">
                            <div className="user user--profile">
                                <div className="user__img">
                                    {professionalAuthor && (
                                        <div className="icon user__icon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                                            </svg>
                                        </div>
                                    )}
                                    <img src="/images/user.jpg" alt="" title=""/>
                                </div>
                                <div className="user__content">
                                    <div className="user__header">
                                        <div className="user__rating">
                                            <div className="rating-number rating-number--small">{rating}</div>
                                        </div>
                                    </div>
                                    {professionalAuthor &&
                                    <div className="user__status">Professional author</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="author-info__item">
                            <div className="author-info__title">Country of Residence</div>
                            <div className="author-info__value">{country}</div>
                        </div>
                        <div className="author-info__item">
                            <div className="author-info__title">Language</div>
                            <div className="author-info__value">
                                {languages && languages.length>0 && languages.map((item, index) =>
                                    <>
                                    {index ? ', ' : ''}
                                    {item}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="author-about">
                    <div className={"author-about__text" + (isShow ? ' show' : '')}>
                        Japan is one of the most amazing countries in the world, where carefully preserved
                        centuries-old traditions are harmoniously combined with cutting-edge technologies.
                        <br/><br/>
                        Initially, my grandmother instilled in me a love for Japan (she was a Japanese
                        translator). Actually, this influenced my choice of Japanese when I entered the
                        International Faculty of the Pacific State University (formerly KSTU). Japan is one
                        of the most amazing countries in the world, where carefully preserved centuries-old
                        traditions are harmoniously combined with cutting-edge technologies.
                    </div>
                    <Button
                        className={isShow ? 'btn--more' : null}
                        variant='filled'
                        squared={true}
                        onClick={toggleText}
                    >
                        <span className="btn__text btn__text--more">Show more</span>
                        <span className="btn__text btn__text--less">Show less</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetail;