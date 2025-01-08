import '../App.css'

type Props = object;

const Footer: React.FC<Props> = () => {
    return (
     <footer className="bg-background-light text-text-primary py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Xtrack. All rights reserved.</p>
      </footer>
    );
}

export default Footer;