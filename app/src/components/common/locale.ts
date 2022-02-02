import { useRouter } from 'next/router';
import { en } from '../../locales/en';
import { ru } from '../../locales/ru';
import { zh } from '../../locales/zh';

const Locale = () => {
    const router = useRouter();
    const r = router.locale;
    let t = null;
    switch (r) {
        case 'ru': t = ru;
            break;
        case 'zh': t = zh;
            break;
        default: t = en;
    }
};

export default Locale;