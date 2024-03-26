import styles from "./componentsView.module.css";

import Box from "../../components/Box/box";
import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import { Link } from "react-router-dom";
import { IPropsDetail, PropsInfo } from "../../data/Props";
import RootTable from "../../components/Table/table";

export interface IComponentsView {
  heading: string;
  subHeading: string | string[];
  propsAccepted: PropsInfo;
  children?: React.ReactNode;
}

const ComponentsView = ({
  heading,
  subHeading,
  propsAccepted,
  children,
}: IComponentsView) => {
  return (
    <section className={styles.components_view}>
      <Link to={"/"}>
        👈 <span>Go Home</span>
      </Link>
      <Heading heading="h3">{heading}</Heading>
      {subHeading?.length > 1 && Array.isArray(subHeading)
        ? subHeading?.map((subHeadingText, index) => (
            <Text text={subHeadingText} key={index} />
          ))
        : typeof subHeading === "string" && <Text text={subHeading} />}
      <Heading className={styles.heading} heading="h4">
        🧾 Props Accepted:
      </Heading>
      <PropsTable {...propsAccepted} />
      <Box className={styles.componentsView}>{children}</Box>
    </section>
  );
};

function PropsTable(props: PropsInfo) {
  const { headers, caption, propsDetail } = props;
  return (
    <RootTable className={styles.table} caption={caption}>
      <RootTable.TableHead>
        <RootTable.TableRow>
          {headers.map((header, index) => {
            return (
              <RootTable.TableBodyData
                isTableHeading={true}
                tableHeading={header}
                key={index}
              />
            );
          })}
        </RootTable.TableRow>
      </RootTable.TableHead>
      <RootTable.TableBody>
        {propsDetail.map((propsDetail: IPropsDetail, index) => {
          return (
            <RootTable.TableRow key={index}>
              {Object.keys(propsDetail).map((propVal: string, propInd) => {
                return (
                  <RootTable.TableBodyData
                    key={propInd}
                    isTableHeading={false}
                    tableHeading={propsDetail[propVal as keyof IPropsDetail]}
                  />
                );
              })}
            </RootTable.TableRow>
          );
        })}
      </RootTable.TableBody>
    </RootTable>
  );
}

export { ComponentsView };
