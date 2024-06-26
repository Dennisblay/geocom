const Footer = () => {
    return (
        <footer className="bg-background ">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-muted-foreground ">
                    <li>
                        <a className="  transition hover:text-ring" href="#"> About </a>
                    </li>


                    <li>
                        <a className="transition hover:text-ring" href="#"> Services </a>
                    </li>

                    <li>
                        <a className="transition hover:text-ring" href="#"> Blog </a>
                    </li>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;