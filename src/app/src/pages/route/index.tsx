import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {Breadcrumbs, Layout, Pagination, SeeMore} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import {Filter, FilterClass} from '@components/RoutesFilter';
import {RoutesSort} from '@components/RoutesSort';
import {RoutesContainer} from '@components/Routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function RouteIndexPage() {
    return (
        <></>
    )
}