interface ISectionTitleProps {
  title: string;
  tagTitle: string;
}

const SectionTitle = (props: ISectionTitleProps) => {
  const { title, tagTitle } = props;
  return (
    <h1 className="flex items-center text-3xl font-bold dark:text-white mb-4">
      {title}
      <span className="bg-blue-100 text-blue-800 text-sm font-semibold me-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 uppercase">
        {tagTitle}
      </span>
    </h1>
  );
};

export default SectionTitle;
