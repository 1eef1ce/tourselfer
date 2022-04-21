import {useCallback, useRef, useState} from 'react';
import {Layout} from '@components/common';
import {Button, Checkbox, ImageUpload, Input, Radio, SelectField, Textarea} from '@components/ui';
import {ChevronRight, Plus, Trashcan} from '@components/icons';
import Head from 'next/head';
import {useWindowSize} from '@lib/hooks/useWindowSize';
import ReactTags from 'react-tag-autocomplete';

export default function CreateRoutePage() {
    const windowSize = useWindowSize();
    let isMobile;
    (windowSize.width < 768) ? isMobile = true : isMobile = false;

    const [isShow, setShow] = useState(false);
    const scrollTo = useRef(null);
    const toggleText = () => {
        setShow(!isShow);
        if (isShow) {
            scrollTo.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const [tags, setTags] = useState([]);

    const [suggestions, setSuggestions] = useState([
        { id: 1, name: "Active1" },
        { id: 2, name: "Active2" },
        { id: 3, name: "Active3" },
    ]);

    const reactTags = useRef();

    const onDelete = useCallback((tagIndex) => {
        setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags]);

    const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
    }, [tags]);

    const [step1, setStep1] = useState(true),
          [step2, setStep2] = useState(false),
          [step3, setStep3] = useState(false);

    const stepToggle = function () {
        if (step1) {
            setStep2(step1);
            setStep1(!step1);
        }
        else if (step2) {
            setStep3(step2);
            setStep2(!step2);
        }
        else if (step3) {
            setStep1(step3);
            setStep3(!step3);
        }
        return {step1, step2, step3};
    };

    const [file, setFile] = useState('');

    const setImage = (image) => {
        setFile(image)
    };

    const [inputList, setInputList] = useState([{routeTitle: "", routeLang: ""}]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, {routeTitle: "", routeLang: ""}]);
    };

    const [shortFieldList, setShortFieldList] = useState([{shortDesc: "", shortDescLang: ""}]);

    const handleShortFieldChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...shortFieldList];
        list[index][name] = value;
        setShortFieldList(list);
    };

    const handleShortFieldRemoveClick = index => {
        const list = [...shortFieldList];
        list.splice(index, 1);
        setShortFieldList(list);
    };

    const handleShortFieldAddClick = () => {
        setShortFieldList([...shortFieldList, {shortDesc: "", shortDescLang: ""}]);
    };

    const [fullFieldList, setFullFieldList] = useState([{fullDesc: "", fullDescLang: ""}]);

    const handleFullFieldChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...fullFieldList];
        list[index][name] = value;
        setFullFieldList(list);
    };

    const handleFullFieldRemoveClick = index => {
        const list = [...fullFieldList];
        list.splice(index, 1);
        setFullFieldList(list);
    };

    const handleFullFieldAddClick = () => {
        setFullFieldList([...fullFieldList, {fullDesc: "", fullDescLang: ""}]);
    };

    const [imageList, setImageList] = useState([{imageName: ""}]);

    const handleImageRemoveClick = index => {
        const list = [...imageList];
        list.splice(index, 1);
        setImageList(list);
    };

    const handleImageAddClick = () => {
        setImageList([...imageList, {imageName: ""}]);
    };

    return (
        <Layout>
            <Head>
                <title>Create Route</title>
            </Head>

            <div className="creation-bar">
                <div className="container">
                    <Button
                        size="medium"
                        variant="outlined"
                        colored
                    >
                        Сохранить черновик
                    </Button>
                    {!isMobile && (
                        <Button
                            size="medium"
                            variant="filled"
                            colored
                            isEndIcon
                            endIcon={<ChevronRight/>}
                            onClick={stepToggle}
                        >
                            Далее
                        </Button>
                    )}
                    {isMobile && (
                        <Button
                            size="medium"
                            variant="filled"
                            colored
                            isIcon
                            icon={<ChevronRight/>}
                            onClick={stepToggle}
                        />
                    )}
                </div>
            </div>
            <div className="container">
                <div className="creation-progress">
                    <div className={"creation-progress__step" + (step1 ? ' active' : '')}>
                        <div className="timeline">
                            <div className="timeline__dash"/>
                            <div className="timeline__placeholder">
                                <div className="timeline__time">1 step</div>
                            </div>
                        </div>
                        <div className="creation-progress__title">About the route</div>
                    </div>
                    <div className={"creation-progress__step" + (step2 ? ' active' : '')}>
                        <div className="timeline">
                            <div className="timeline__dash"/>
                            <div className="timeline__placeholder">
                                <div className="timeline__time">2 step</div>
                            </div>
                        </div>
                        <div className="creation-progress__title">Route locations</div>
                    </div>
                    <div className={"creation-progress__step" + (step3 ? ' active' : '')}>
                        <div className="timeline">
                            <div className="timeline__dash"/>
                            <div className="timeline__placeholder">
                                <div className="timeline__time">3 step</div>
                            </div>
                            <div className="timeline__time timeline__time--last"/>
                        </div>
                        <div className="creation-progress__title">Cost and Marketing</div>
                    </div>
                </div>
                <div className="creation">
                    {step1 && (
                        <div className="creation__container">
                            <form className="form">
                                <div className="section">
                                    <div className="title-3">Название маршрута</div>
                                    {inputList.map((x, i) => {
                                        return (
                                            <>
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <Input
                                                            id="routeTitle"
                                                            name="routeTitle"
                                                            label="Заголовок маршрута"
                                                            required
                                                            value={x.routeTitle}
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="form__group">
                                                        <SelectField
                                                            name="routeLang"
                                                            classNamePrefix="select"
                                                            label="Язык"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form__actions">
                                                    {inputList.length - 1 === i && (
                                                        <Button
                                                            squared
                                                            isStartIcon
                                                            startIcon={<Plus/>}
                                                            onClick={handleAddClick}
                                                        >
                                                            Add field
                                                        </Button>
                                                    )}
                                                    {inputList.length !== 1 && (
                                                        <Button
                                                            squared
                                                            danger
                                                            isStartIcon
                                                            startIcon={<Trashcan/>}
                                                            onClick={() => handleRemoveClick(i)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="section">
                                    <div className="title-3">Местоположение</div>
                                    <div className="form__row">
                                        <div className="form__group">
                                            <SelectField
                                                name="routeCountry"
                                                classNamePrefix="select"
                                                label="Страна"
                                                required
                                            />
                                        </div>
                                        <div className="form__group">
                                            <Input
                                                id="routeCity"
                                                name="routeCity"
                                                label="Город"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title-3">Изображения</div>
                                    <div className="form__row">
                                        <div className="form__group">
                                            <div className="form__label">Картинка анонса *</div>
                                            <ImageUpload
                                                setImage={setImage}
                                                image={file}
                                                type=".jpg, .png"
                                                imageWidth={600}
                                                imageHeight={600}
                                            />
                                        </div>
                                        <div className="form__group">
                                            <div className="form__label">Детальная картинка *</div>
                                            <ImageUpload
                                                setImage={setImage}
                                                image={file}
                                                type=".jpg, .png"
                                                imageWidth={1416}
                                                imageHeight={600}
                                            />
                                        </div>
                                    </div>
                                    <div className="form__row form__row--end">
                                        {imageList.map((x, i) => {
                                            return (
                                                <>
                                                    <div className="form__group">
                                                        {i === 0 &&
                                                        <div className="form__label">Дополнительные изображения</div>
                                                        }
                                                        <ImageUpload
                                                            setImage={setImage}
                                                            image={file}
                                                            inputName="imageName"
                                                            type=".jpg, .png"
                                                            imageWidth={1200}
                                                            imageHeight={800}
                                                        />
                                                        <div className="form__actions">
                                                            {imageList.length - 1 === i && (
                                                                <Button
                                                                    squared
                                                                    isStartIcon
                                                                    startIcon={<Plus/>}
                                                                    onClick={handleImageAddClick}
                                                                >
                                                                    Add field
                                                                </Button>
                                                            )}
                                                            {imageList.length !== 1 && (
                                                                <Button
                                                                    squared
                                                                    danger
                                                                    isStartIcon
                                                                    startIcon={<Trashcan/>}
                                                                    onClick={() => handleImageRemoveClick(i)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title-3">Продолжительность маршрута</div>
                                    <div className="form__row form__row--end">
                                        <div className="form__group">
                                            <SelectField
                                                name="routeMinMeasure"
                                                classNamePrefix="select"
                                                label="Минимальная продолжительность"
                                                required
                                            />
                                        </div>
                                        <div className="form__group">
                                            <Input
                                                id="routeMinValue"
                                                name="routeMinValue"
                                            />
                                        </div>
                                        <div className="form__divider">&#8212;</div>
                                        <div className="form__group">
                                            <SelectField
                                                name="routeMaxMeasure"
                                                classNamePrefix="select"
                                                label="Максимальная продолжительность"
                                                required
                                            />
                                        </div>
                                        <div className="form__group">
                                            <Input
                                                id="routeMaxValue"
                                                name="routeMaxValue"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title-3">Детали маршрута</div>
                                    <div className="form__row">
                                        <div className="form__group">
                                            <div className="form__label">Затраты на маршруте *</div>
                                            <Radio
                                                id="routeCost0"
                                                name="routeCost"
                                                value="0"
                                                label="Free"
                                            />
                                            <Radio
                                                id="routeCost1"
                                                name="routeCost"
                                                value="1"
                                                label="$"
                                            />
                                            <Radio
                                                id="routeCost2"
                                                name="routeCost"
                                                value="2"
                                                label="$$"
                                            />
                                            <Radio
                                                id="routeCost3"
                                                name="routeCost"
                                                value="3"
                                                label="$$$"
                                            />
                                            <Radio
                                                id="routeCost4"
                                                name="routeCost"
                                                value="4"
                                                label="$$$$"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <div className="form__label">Тип маршрута *</div>
                                            <Radio
                                                id="routeType1"
                                                name="routeType"
                                                value="walk"
                                                label="Пеший"
                                            />
                                            <Radio
                                                id="routeType2"
                                                name="routeType"
                                                value="public"
                                                label="Общественный транспорт"
                                            />
                                            <Radio
                                                id="routeType3"
                                                name="routeType"
                                                value="auto"
                                                label="Автомобиль"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <div className="form__label">Сезонность маршрута *</div>
                                            <Checkbox
                                                id="routeSeason1"
                                                name="routeSeason1"
                                                value="winter"
                                                label="Зима"
                                            />
                                            <Checkbox
                                                id="routeSeason2"
                                                name="routeSeason2"
                                                value="spring"
                                                label="Весна"
                                            />
                                            <Checkbox
                                                id="routeSeason3"
                                                name="routeSeason3"
                                                value="summer"
                                                label="Лето"
                                            />
                                            <Checkbox
                                                id="routeSeason4"
                                                name="routeSeason4"
                                                value="autumn"
                                                label="Осень"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="title-3">Описание</div>
                                    <div className="form__row">
                                        <div className="form__group">
                                            <div className="form__label">Теги *</div>
                                            <ReactTags
                                                ref={reactTags}
                                                tags={tags}
                                                suggestions={suggestions}
                                                onDelete={onDelete}
                                                onAddition={onAddition}
                                                classNames={{
                                                    selectedTag: 'tag'
                                                }}
                                                noSuggestionsText="No such tags"
                                                autoresize={false}
                                            />
                                        </div>
                                    </div>
                                    {shortFieldList.map((x, i) => {
                                        return (
                                            <>
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <Textarea
                                                            id="shortDesc"
                                                            name="shortDesc"
                                                            label="Краткое описание маршрута"
                                                            required
                                                            maxLength={1000}
                                                            value={x.shortDesc}
                                                            onChange={e => handleShortFieldChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="form__group">
                                                        <SelectField
                                                            name="shortDescLang"
                                                            classNamePrefix="select"
                                                            label="Язык"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form__actions">
                                                    {shortFieldList.length - 1 === i && (
                                                        <Button
                                                            squared
                                                            isStartIcon
                                                            startIcon={<Plus/>}
                                                            onClick={handleShortFieldAddClick}
                                                        >
                                                            Add field
                                                        </Button>
                                                    )}
                                                    {shortFieldList.length !== 1 && (
                                                        <Button
                                                            squared
                                                            danger
                                                            isStartIcon
                                                            startIcon={<Trashcan/>}
                                                            onClick={() => handleShortFieldRemoveClick(i)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })}
                                    {fullFieldList.map((x, i) => {
                                        return (
                                            <>
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <Textarea
                                                            id="fullDesc"
                                                            name="fullDesc"
                                                            label="Детальное описание маршрута"
                                                            required
                                                            value={x.fullDesc}
                                                            onChange={e => handleFullFieldChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="form__group">
                                                        <SelectField
                                                            name="fullDescLang"
                                                            classNamePrefix="select"
                                                            label="Язык"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form__actions">
                                                    {fullFieldList.length - 1 === i && (
                                                        <Button
                                                            squared
                                                            isStartIcon
                                                            startIcon={<Plus/>}
                                                            onClick={handleFullFieldAddClick}
                                                        >
                                                            Add field
                                                        </Button>
                                                    )}
                                                    {fullFieldList.length !== 1 && (
                                                        <Button
                                                            squared
                                                            danger
                                                            isStartIcon
                                                            startIcon={<Trashcan/>}
                                                            onClick={() => handleFullFieldRemoveClick(i)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })}
                                    <div className="form__row">
                                        <div className="form__group">
                                            <Input
                                                id="routeVideo"
                                                name="routeVideo"
                                                label="Ссылка на видеопрезентацию маршрута"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                    {step2 && (
                        <>
                            <div className="create-route" ref={scrollTo}>
                                <div className="create-route__top">
                                    <div className="create-route__heading">
                                        <div className="title-2">
                                            Museum of Telecommunications and Communications Berlin
                                        </div>
                                        <div className="create-route__name">
                                            <div><span>RU:</span> Музей связи и коммуникаций Берлина</div>
                                            <div><span>DE:</span> Museum für Fernmelde- und Kommunikationstechnik Berlin
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-route__progress progressbar">
                                        <div className="progressbar__line">
                                            <div className="progressbar__thumb"/>
                                            <div className="progressbar__value">Progress 25%</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={"create-route__row" + (isMobile ? ' hidden' : '') + (isShow ? ' show' : '')}>
                                    <div className="create-route__col">
                                        <div className="create-route__block">
                                            <div className="create-route__option">
                                                Адрес:
                                            </div>
                                            <div className="create-route__value">
                                                Leipziger Straße 16, 10117 Berlin-Mitte, Germany
                                            </div>
                                        </div>
                                        <div className="create-route__block">
                                            <div className="create-route__option">
                                                Удобства на локации:
                                            </div>
                                            <div className="create-route__value">
                                                Парковка, Кафе
                                            </div>
                                        </div>
                                        <div className="create-route__block">
                                            <div className="create-route__option">
                                                Режим работы:
                                            </div>
                                            <div className="create-route__value">
                                                Пн: выходной, Вт: 09.00–20.00, Ср–Пт: 09.00–17.00, Сб-Вс: 10.00–18.00
                                            </div>
                                        </div>
                                        <div className="create-route__block">
                                            <div className="create-route__option">
                                                Выходные дни:
                                            </div>
                                            <div className="create-route__value">
                                                5 January 2022, 30 January 2022
                                            </div>
                                        </div>
                                        <div className="create-route__block">
                                            <div className="create-route__option">
                                                Стоимость:
                                            </div>
                                            <div className="create-route__value">
                                                Взрослый 8 Евро, Дети и подростки до 17 лет бесплатно
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-route__col">
                                        <div className="create-route__images">
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                            <div className="create-route__img">
                                                <img src="/images/top-mobile.jpg" alt="" title=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isMobile && (
                                    <div className="create-route__more">
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
                                )}
                                <div className="create-route__buttons">
                                    {!isMobile && (
                                        <Button
                                            size="medium"
                                            variant="outlined"
                                            colored
                                            isStartIcon
                                            startIcon={<Trashcan/>}
                                        >
                                            Удалить
                                        </Button>
                                    )}
                                    {isMobile && (
                                        <Button
                                            size="medium"
                                            variant="outlined"
                                            colored
                                            isIcon
                                            icon={<Trashcan/>}
                                        />
                                    )}
                                    <Button
                                        size="medium"
                                        variant="filled"
                                        colored
                                    >
                                        Редактировать
                                    </Button>
                                </div>
                            </div>
                            <div className="create-location">

                            </div>
                            <div className="more creation__more">
                                <Button
                                    size="large"
                                    variant="outlined"
                                    colored
                                    isEndIcon
                                    endIcon={<Plus/>}
                                >
                                    Добавить еще локацию
                                </Button>
                            </div>
                        </>
                    )}
                    {step3 && (
                        <div className="creation__container">
                            <div className="section">
                                <div className="form__row">
                                    <div className="form__group">
                                        <Input
                                            id="routePrice"
                                            name="routePrice"
                                            label="Стоимость маршрута"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__group">
                                        <Checkbox
                                            id="routeOption1"
                                            name="routeOption1"
                                            value="option1"
                                            label="Этот маршрут может быть пройден вместе с экскурсоводом, котором, как правило, буду являться Я"
                                        />
                                        <Checkbox
                                            id="routeOption2"
                                            name="routeOption2"
                                            value="option2"
                                            label="Я хочу оказывать приоритетную поддержку за фиксированную дополнительную плату"
                                        />
                                        <Checkbox
                                            id="routeOption3"
                                            name="routeOption3"
                                            value="option3"
                                            label="Я хочу, чтобы этот маршрут участвовал в совместных акциях с площадкой Tourselfer.com"
                                        />
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__group">
                                        <Input
                                            id="routeMentorPrice"
                                            name="routeMentorPrice"
                                            label="Стоимость маршрута за человека с экскурсоводом"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}