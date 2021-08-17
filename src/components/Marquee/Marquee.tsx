interface IMarquee {
    children: React.ReactNode
}

const Marquee = ( { children }: IMarquee ) => {

    // TODO: Caluclate animation duration based on content and apply inline

    return (
        <div className="marquee">
            <div className="marquee__track">
                <div>
                  { children }
                </div>
                <div>
                  { children }
                </div>
            </div>
        </div>
    );
};

export default Marquee;
