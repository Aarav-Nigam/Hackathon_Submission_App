import React from 'react'
import Card from './Card/Card';
import './Cards.css'
import InterviewMe from '../../assets/InterviewMe.png'
import LoremIpsum from '../../assets/Lorem ipsum.png'
import PotterIpsum from '../../assets/Potter ipsum.png'
import PizzaIpsum from '../../assets/Pizza Ipsum.png'
import FigmaIpsum from '../../assets/Figma ipsum.png'
import OfficeIpsum from '../../assets/Office ipsum.png'
function Cards({ tab, search, sortType }) {
    var CardsData = [];
    if (localStorage.getItem('aiPlanetDB')) {
        CardsData = JSON.parse(localStorage.getItem('aiPlanetDB'))
    }
    else {
        CardsData = [
            {
                id:1,
                imageSrc:InterviewMe,
                title: "InterviewMe",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 15),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            },
            {
                id:2,
                imageSrc: LoremIpsum,
                title: "Lorem Ipsum",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                 HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 15),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            },
            {
                id:3,
                imageSrc: PotterIpsum,
                title: "Potter Ipsum",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                
                HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 14),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            },
            {
                id:4,
                imageSrc: PizzaIpsum,
                title: "Pizza Impsum",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
               
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                
                HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 13),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            },
            {
                id:5,
                imageSrc: FigmaIpsum,
                title: "Figma Ipsum",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
                
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                
                HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 11),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            },
            {
                id:6,
                imageSrc: OfficeIpsum,
                title: "Office Ipsum",
                summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
            
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Proin sed libero enim sed faucibus turpis. In nisl nisi scelerisque eu ultrices vitae auctor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ut etiam sit amet nisl purus in mollis nunc. Nullam non nisi est sit amet facilisis magna etiam. Amet facilisis magna etiam tempor orci eu lobortis. Non curabitur gravida arcu ac. Nascetur ridiculus mus mauris vitae ultricies leo. Vel orci porta non pulvinar neque laoreet suspendisse. Eu augue ut lectus arcu bibendum at varius.Et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Urna nunc id cursus metus aliquam eleifend mi. Dui faucibus in ornare quam. In nibh mauris cursus mattis molestie a iaculis at erat. Malesuada fames ac turpis egestas maecenas. Libero volutpat sed cras ornare arcu dui vivamus arcu. Orci eu lobortis elementum nibh. Feugiat nisl pretium fusce id velit ut tortor. Est ultricies integer quis auctor elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Tempor nec feugiat nisl pretium fusce id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Massa ultricies mi quis hendrerit dolor. Pellentesque dignissim enim sit amet venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo viverra maecenas accumsan lacus vel. Pretium lectus quam id leo in vitae turpis. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam delectus nesciunt doloremque rem vel accusamus ex, illo, at maxime sapiente aspernatur hic optio voluptates repellat id et dolores? Ipsum.",
                
                HackathonName: "XUC Challenge",
                uploadDate: new Date(2023, 3, 10),
                startDate: new Date(2023, 3, 20),
                endDate: new Date(2023, 3, 28),
                GitHubRepo: "https://github.com/",
                otherLink: "https://www.google.com/",
                favourite: false
            }
        ]
        localStorage.setItem('aiPlanetDB', JSON.stringify(CardsData))
    }

    CardsData.sort(function (a, b) {
        const date1 = new Date(a.uploadDate)
        const date2 = new Date(b.uploadDate)
        return date1 - date2
    })
    if(sortType==2){
        CardsData.reverse()
    }
    return (
        <div id='cards' className='row'>
            {tab == 0 && CardsData.filter(obj => obj.title.includes(search)).map(obj => <Card obj={obj} />)}
            {tab == 1 && CardsData.filter(obj => obj.title.includes(search)).filter(obj => obj.favourite).map(obj => <Card obj={obj} />)}
        </div>
    )
}

export default Cards