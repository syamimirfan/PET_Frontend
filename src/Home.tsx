import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  Category,
  BarChart,
  FileDownload, 
  RocketLaunch, 
  Star,
  Handshake,
  Email,
  Phone,
  LinkedIn,
  Instagram,
  UploadFile
} from '@mui/icons-material'

type Props = object;

const Home: React.FC<Props> = () => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background mx-auto px-4 py-16 flex-grow flex justify-between items-center gap-8">
        <div className="m-14 flex flex-col items-start gap-5">
          <h2 className="text-7xl text-left  font-bold text-text-primary">Manage Your</h2>  
          <h2 className="text-7xl font-bold text-text-primary">Expenses Effortlessly</h2>  
          <h2 className="text-7xl font-bold text-text-primary">With <span className='text-primary'>Xtrack</span></h2>
          <p className="text-text-primary text-start">
            Effortlessly manage your finances with XTrack. Track expenses, categorize transactions,
            and gain insights into spending habits. Simplify budgeting and stay organized with intuitive
            tools designed for seamless, stress-free financial management.
          </p> 
          <button className="border-2 border-primary py-2 px-6 font-bold text-text-primary hover:bg-primary">
            <a href="">Get Started</a>
          </button>
        </div>
         <img src="src/assets/xtrack_hero.png" alt="xtrack.png" className="max-w-2xl mx-auto" />
      </section>
    
      {/* Services and Futures*/}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Our Services and Futures</h2>
          <p className="text-text-primary mb-8 ">
            Our Services and Features are designed to simplify personal expense management,
            providing tools to track and categorize transactions effortlessly. Gain insights
            into spending patterns with detailed financial reports and visual analytics. Enjoy
            seamless data export, secure multi-device synchronization, and customizable settings
            tailored to your financial goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Category fontSize='large' className="text-primary" />,
                title: 'Transaction Categorization',
                description:
                  'Enter your categorizes expenses (e.g., groceries, utilities, entertainment) for better tracking.',
              },
              {
                icon: <BarChart fontSize='large' className='text-primary'/>,
                title: 'Financial Reports',
                description:
                  'Provides detailed insights into spending patterns through charts and graphs.',
              },
              {
                icon: <FileDownload fontSize='large' className='text-primary'/>,
                title: 'Data Export',
                description:
                  'Enables users to download reports in formats like PDF for offline use.',
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-background-light p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="mb-4 ">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-text-primary mb-0">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us */}
    <section className="bg-background py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
          
        <div className="flex-1">
          <img
            src="src/assets/xtrack_aboutus.png" // Replace with your image path
            alt="About Us"
            className="max-w-xl rounded-lg shadow-lg"
          />
        </div>
        
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            About Us
          </h2>
          <p className="text-text-secondary mb-6">
            At <span className='text-primary font-bold'>Xtrack</span>, we are passionate about empowering individuals to take control of their finances. 
            Our innovative tools simplify expense tracking, budgeting, and financial goal-setting for 
            seamless, stress-free money management.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-text-primary flex items-center justify-center rounded-lg text-xl">
                <RocketLaunch fontSize="medium" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Our Mission
                </h3>
                <p className="text-text-secondary">
                  Simplify financial management to help users achieve their goals effortlessly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg text-xl">
                <Star fontSize="medium" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Our Vision
                </h3>
                <p className="text-text-secondary">
                  Build a future where financial literacy is accessible to all.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg text-xl">
                <Handshake fontSize="medium" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Our Values
                </h3>
                <p className="text-text-secondary">
                  Focus on transparency, innovation, and user-first solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
  {/* Career */}
   <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-primary mb-4">Join Our Team</h2>
          <p className="text-text-primary text-lg">
            Be part of a dynamic team shaping the future of personal finance. Let’s grow together!
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-14">
          <div className="flex-1 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Contact Information</h3>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Email fontSize="large" />, label: 'Email', value: 'careers@xtrack.com' },
                { icon: <Phone fontSize="large" />, label: 'Phone', value: '+60 13456789' },
                { icon: <LinkedIn fontSize="large" />, label: 'LinkedIn', value: '@xtrack' },
                { icon: <Instagram fontSize="large" />, label: 'Instagram', value: '@xtrack_official' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-background-light p-4 rounded-lg shadow-md hover:scale-105 transition-shadow"
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{item.label}</h4>
                    <p className="text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Application Form */}
          <div className="flex-1 bg-background-light shadow-lg p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-text-primary mb-6 text-center">Apply Now</h3>
            <form className="grid gap-6">
              <div>
                <label htmlFor="fullName" className="block text-text-primary mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-3 border text-text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-primary mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border text-text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-text-primary mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border text-text-secondary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-text-primary mb-2">Position Applied For</label>
                <input
                  type="text"
                  id="position"
                  className="w-full p-3 border text-text-secondary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Software Engineer"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary mb-2">Cover Letter</label>
                <textarea
                  id="message"
                  className="w-full p-3 border text-text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Why do you want to join us?"
                ></textarea>
              </div>
              <div>
                <label htmlFor="resume" className="block text-text-primary mb-2">Upload Resume</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    id="resume"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center gap-2 bg-primary text-text-primary py-2 px-4 rounded-lg cursor-pointer hover:bg-primary-dark transition"
                  >
                    <UploadFile />
                    Upload Resume
                  </label>
                  <span className="text-text-primary text-sm">No file chosen</span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <Footer/>
   </div>
  );
}

export default Home
