import React from 'react'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import TabsPage from '../Tabs/Tabs'
import { useEffect } from 'react'
function Home() {
    const [tab, setTab] = React.useState(0);
    const [search,setSearch] = React.useState('');
    const [sortType,setSortType] = React.useState(1);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div id='home'>
            <Hero/>
            {/* 
            Generally I would use redux for these many state managements, But It was not written to use it
            So I haven't used it
             */}
            <TabsPage tab={tab} setTab={setTab} search={search} setSearch={setSearch} sortType={sortType} setSortType={setSortType}/>
            <Cards tab={tab} search={search} sortType={sortType}/>
        </div>
    )
}

export default Home