interface RenderPropsWithCommon<T> {
 items: T[];
 Component: React.FC<T>;
 commonProps?: Record<string, any>;
}

export const renderComponentsWithCommonProps = <T extends Record<string, any>>({
  items,
  Component,
  commonProps,
}: RenderPropsWithCommon<T>) => {
  return items.map((item) => (
    <Component key={item.id} {...item} {...commonProps} />
  ));
};
