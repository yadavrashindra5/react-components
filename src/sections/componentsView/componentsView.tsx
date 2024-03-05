import styles from "./componentsView.module.css";

import Box from "../../components/Box/box";
import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import CodeLists from "../../components/CodeLists/codeLists";
import { Link } from "react-router-dom";
import { IPropsDetail, PropsInfo } from "../../data/Props";
import RootTable from "../../components/Table/table";
import { headingProps } from "../../data/propsData/headingProps";

export interface IComponentsView {
  heading: string;
  subHeading: string | string[];
  propsAccepted?: PropsInfo;
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
      <Heading heading="h3" headingText={heading} />
      {subHeading?.length > 1 && Array.isArray(subHeading)
        ? subHeading?.map((subHeadingText, index) => (
            <Text text={subHeadingText} key={index} />
          ))
        : typeof subHeading === "string" && <Text text={subHeading} />}
      <Heading heading="h4" headingText="🧾 Props Accepted:" />
      <PropsTable {...propsAccepted} />
      <Box className={styles.componentsView}>{children}</Box>
    </section>
  );
};

function PropsTable(props: PropsInfo) {
  const { headers, caption, propsDetail } = props;
  return (
    <RootTable caption={caption}>
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
        {propsDetail.map((propsDetail: IPropsDetail) => {
          return (
            <RootTable.TableRow>
              {Object.keys(propsDetail).map((propVal, propInd) => {
                return (
                  <RootTable.TableBodyData
                    key={propInd}
                    isTableHeading={false}
                    tableHeading={propsDetail[propVal]}
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
