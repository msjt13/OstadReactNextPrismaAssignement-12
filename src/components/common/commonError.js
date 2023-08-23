
const CommonError = (params) => {
    const text = params.text || 'The was an error.';
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-12">
            <section className="bg-white dark:bg-gray-900 my-2 py-8 px-4">
                <div className="py-4 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{text}</h2>
                </div>
            </section>
        </main>
    );
};

export default CommonError;