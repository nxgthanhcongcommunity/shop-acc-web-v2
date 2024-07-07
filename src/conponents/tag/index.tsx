const Tag = ({ tagTitle }: { tagTitle: string }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold me-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 uppercase flex items-center">
      {tagTitle}
    </span>
  );
};

export default Tag;
