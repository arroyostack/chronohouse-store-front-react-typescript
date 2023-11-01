
export const ViewContainer = ( { children }: { children?: JSX.Element; } ) => {
    return (
        <div className="project-container flex flex-col gap-16 bg-zinc-300 dark:bg-slate-900 min-h-screen py-6 px-3 md:px-10 ">
            { children }
        </div>
    );
};
