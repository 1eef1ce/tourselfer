import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FilterIcon } from '@components/icons';
import { SelectField } from '@components/ui';

const RoutesSort = props => {

    const router = useRouter();
    const { t } = useTranslation("components");

    return (
        <div className="filter">
            <div className="filter__actions">
                <div className="filter__select filter__select--simple">
                    <SelectField
                        classPrefix="select-filter"
                        id="filter"
                        name="filter"
                        options={
                            [
                                { label: t("sorts.route_rating"), order: 'desc', by: 'route-rating' },
                                { label: t("sorts.author_rating"), order: 'desc', by: 'author-rating' },
                                { label: t("sorts.route_cost"), order: 'asc', by: 'cost' },
                                { label: t("sorts.route_duration"), order: 'asc', by: 'duration' }
                            ]
                        }
                        defaultOption={
                            [
                                { label: t("sorts.route_rating"), order: 'desc', by: 'route-rating' }
                            ]
                        }
                        onChange={props?.onChange}
                    />
                </div>
                <a className="filter-btn" href="javascript:void(0)">
                    <span className="icon filter-btn__icon">
                        <FilterIcon />
                    </span>
                    <span>{t('filter.mobile_title')}</span>
                </a>
            </div>
        </div>
    );
};

export default RoutesSort;