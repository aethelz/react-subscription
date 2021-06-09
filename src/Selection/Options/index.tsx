import classNames from 'classnames';

type Props<T> = {
  values: T[];
  selected: T;
  onChange: (value: T) => void;
  unit: string;
};
const Options = <T extends unknown>({
  values,
  selected,
  onChange,
  unit,
}: Props<T>) => {
  return (
    <div className="buttons is-justify-content-center">
      {values.map((value, idx) => (
        <button
          key={idx}
          className={classNames('button', 'is-rounded', {
            'is-outline': value !== selected,
            'is-info': value === selected,
          })}
          onClick={() => onChange(value)}
        >
          {value} {unit}
        </button>
      ))}
    </div>
  );
};

export default Options;
