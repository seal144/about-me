const DummyForScrollOffset = ({ id }: { id?: string }) => {
  return (
    <div className="relative">
      <div id={id} className="absolute top-[-80px]"></div>
    </div>
  );
};

export default DummyForScrollOffset;
