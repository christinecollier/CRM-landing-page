import tab_1 from './images/product_bf_images/benefit_tab_1.bmp'
import tab_2 from './images/product_bf_images/benefit_tab_2.bmp'
import tab_3 from './images/product_bf_images/benefit_tab_3.bmp'
import tab_4 from './images/product_bf_images/benefit_tab_4.bmp'

// glassmorphism icons from Figma at (https://www.figma.com/community/file/1172337249143902190)

const benefits = [
    {   id: 1,
        topCaption : 'Integration',
        title : 'Seamless Integration',
        caption : 'Easily connect with existing tools and platforms to create a unified system for managing customer data.',
        img: {
            src: tab_1,
            alt: 'calender tool',
        }
    },
    {   id: 2,
        topCaption: 'Analysis',
        title: 'Data-Driven Insights',
        caption: 'Unlock valuable insights with powerful analytics to make smarter business decisions.',
        img: {
            src: tab_2,
            alt: 'data analytics',
        }
    },
    {   id: 3,
        topCaption: 'Automation',
        title: 'Automated Workflows',
        caption: 'Streamline tasks and reduce manual processes, increasing productivity across your team.',
        img: {
            src: tab_3,
            alt: 'workflow',
        }
    },
    {   id: 4,
        topCaption: 'Service',
        title: 'Customer Experience',
        caption: 'Tailor interactions and manage data to deliver a more personalized service.',
        img: {
            src: tab_4,
            alt: 'leads',
        }
    }    
]

export default benefits;