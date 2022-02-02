import dynamic from 'next/dynamic'
import {Header} from '@components/common'
import {Footer} from '@components/common'
import {Loader} from '@components/ui'

const Loading = () => (
    <div className="overlay">
        <Loader />
    </div>
)

const dynamicProps = {
    loading: Loading,
}

export default function Layout({ children }) {
    return (
        <div className="wrapper">
            <Header/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}