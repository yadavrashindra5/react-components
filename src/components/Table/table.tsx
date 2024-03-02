import styles from "./table.module.css";

export default function Table() {
  return (
    <>
      <div className={styles.dogs}>
        <table className={styles.table}>
          <caption>Table about different breeds of dogs.</caption>
          <colgroup>
            <col />
            <col style={{ backgroundColor: "yellow" }} span={4} />
          </colgroup>
          <tr>
            <td>&nbsp;</td>
            <th>Knocky</th>
            <th>Flor</th>
            <th>Ella</th>
            <th>Juan</th>
          </tr>
          <tr>
            <th>Breed</th>
            <td>Jack Russell</td>
            <td>Poodle</td>
            <td>Streetdog</td>
            <td>Cocker Spaniel</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>16</td>
            <td>9</td>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Owner</th>
            <td>Mother-in-law</td>
            <td>Me</td>
            <td>Me</td>
            <td>Sister-in-law</td>
          </tr>
          <tr>
            <th>Eating Habits</th>
            <td>Eats everyone's leftovers</td>
            <td>Nibbles at food</td>
            <td>Hearty eater</td>
            <td>Will eat till he explodes</td>
          </tr>
        </table>
      </div>
      <div className={styles.animals}>
        <table className={styles.table}>
          <caption>Table about different types of Animals.</caption>
          <tr>
            <th colSpan={2}>Animals</th>
          </tr>
          <tr>
            <th colSpan={2}>Hippopotamus</th>
          </tr>
          <tr>
            <th rowSpan={2}>Horse</th>
            <td>Mare</td>
          </tr>
          <tr>
            <td>Stallion</td>
          </tr>
          <tr>
            <th colSpan={2}>Crocodile</th>
          </tr>
          <tr>
            <th rowSpan={2}>Chicken</th>
            <td>Hen</td>
          </tr>
          <tr>
            <td>Rooster</td>
          </tr>
        </table>
      </div>

      <div className={styles.time_table}>
        <table>
          <caption>
            Table about Timetable of a teacher teaching different languages.
          </caption>
          <colgroup>
            <col />
            <col />
            <col style={{ backgroundColor: "#97DB9A" }} />
            <col style={{ width: "4.2rem" }} />
            <col style={{ backgroundColor: "#97DB9A" }} />
            <col
              style={{
                backgroundColor: "#DCC48E",
                border: "4px solid #C1437A",
              }}
            />
          </colgroup>
          <tr>
            <td>&nbsp;</td>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr>
            <th>1st period</th>
            <td>English</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>2nd period</th>
            <td>English</td>
            <td>English</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>3rd period</th>
            <td>&nbsp;</td>
            <td>German</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>4th period</th>
            <td>&nbsp;</td>
            <td>English</td>
            <td>&nbsp;</td>
            <td>English</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
      <div className={styles.spending_records}>
        <table>
          <caption>How I chose to spend my money</caption>
          <tr>
            <th scope="col">Purchase</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Evaluation</th>
            <th scope="col">Cost (€)</th>
          </tr>
          <tfoot>
            <tr>
              <td colSpan={4}>SUM</td>
              <td>118</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td scope="row">Haircut</td>
              <td>Hairdresser</td>
              <td>12/09</td>
              <td>Great idea</td>
              <td>30</td>
            </tr>
            <tr>
              <td scope="row">Lasagna</td>
              <td>Restaurant</td>
              <td>12/09</td>
              <td>Regrets</td>
              <td>18</td>
            </tr>
            <tr>
              <td scope="row">Shoes</td>
              <td>Shoeshop</td>
              <td>13/09</td>
              <td>Big regrets</td>
              <td>65</td>
            </tr>
            <tr>
              <td scope="row">Toothpaste</td>
              <td>Supermarket</td>
              <td>13/09</td>
              <td>Good</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.sold_items}>
        <table>
          <caption>Items Sold August 2016</caption>
          <thead>
            <tr>
              <td colSpan={2} rowSpan={2}></td>
              <th id="clothes" colSpan={3}>
                Clothes
              </th>
              <th id="accessories" colSpan={2}>
                Accessories
              </th>
            </tr>
            <tr>
              <th id="trouser" headers="clothes">
                Trousers
              </th>
              <th id="skirts" headers="clothes">
                Skirts
              </th>
              <th id="dresses" headers="clothes">
                Dresses
              </th>
              <th id="bracelets" headers="accessories">
                Bracelets
              </th>
              <th id="rings" headers="accessories">
                Rings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={3}>Belgium</th>
              <th>Antwerp</th>
              <td>56</td>
              <td>22</td>
              <td>43</td>
              <td>72</td>
              <td>23</td>
            </tr>
            <tr>
              <th>Gent</th>
              <td>46</td>
              <td>18</td>
              <td>50</td>
              <td>61</td>
              <td>15</td>
            </tr>
            <tr>
              <th>Brussels</th>
              <td>51</td>
              <td>27</td>
              <td>38</td>
              <td>69</td>
              <td>28</td>
            </tr>
            <tr>
              <th rowSpan={2}>The Netherlands</th>
              <th>Amsterdam</th>
              <td>89</td>
              <td>34</td>
              <td>69</td>
              <td>85</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Utrecht</th>
              <td>80</td>
              <td>12</td>
              <td>43</td>
              <td>36</td>
              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.solar_system}>
        <table>
          <caption>
            Data about the planets of our solar system (Planetary facts taken
            from{" "}
            <a
              target="_blank"
              href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
            >
              Nasa's Planetary Fact Sheet - Metric
            </a>
            ).
          </caption>
          <colgroup>
            <col />
            <col />
            <col style={{ border: "0.2rem solid #000" }} />
          </colgroup>
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>Name</th>
              <th>
                Mass (10<sup>24</sup>kg)
              </th>
              <th>Diameter (km)</th>
              <th>
                Density (kg/m<sup>3</sup>)
              </th>
              <th>
                Gravity (m/s<sup>2</sup>)
              </th>
              <th>Length of day (hours)</th>
              <th>
                Distance from Sun (10<sup>6</sup>km)
              </th>
              <th>Mean temperature (°C)</th>
              <th>Number of moons</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={5} colSpan={2}>
                Terrestrial planets
              </th>
            </tr>
            <tr>
              <th>Mercury</th>
              <td>0.330</td>
              <td>4,879</td>
              <td>5427</td>
              <td>3.7</td>
              <td>4222.6</td>
              <td>57.9</td>
              <td>167</td>
              <td>0</td>
              <td>Closest to the Sun</td>
            </tr>
            <tr>
              <th>Venus</th>
              <td>4.87</td>
              <td>12,104</td>
              <td>5243</td>
              <td>8.9</td>
              <td>2802.0</td>
              <td>108.2</td>
              <td>464</td>
              <td>0</td>
            </tr>
            <tr>
              <th>Earth</th>
              <td>5.97</td>
              <td>12,756</td>
              <td>5514</td>
              <td>9.8</td>
              <td>24.0</td>
              <td>149.6</td>
              <td>15</td>
              <td>1</td>
              <td>Our World</td>
            </tr>
            <tr>
              <th>Mars</th>
              <td>0.642</td>
              <td>6,792</td>
              <td>3933</td>
              <td>3.7</td>
              <td>24.7</td>
              <td>229.9</td>
              <td>-65</td>
              <td>2</td>
              <td>The Red Planet</td>
            </tr>
            <tr>
              <th colSpan={1} rowSpan={5}>
                Jovian Planet
              </th>
            </tr>
            <tr>
              <th colSpan={1} rowSpan={2}>
                Gas Giants
              </th>
              <th>Jupiter</th>
              <td>1898</td>
              <td>142,984</td>
              <td>1326</td>
              <td>23.1</td>
              <td>9.9</td>
              <td>778.6</td>
              <td>-110</td>
              <td>67</td>
              <td>The Largest Planet</td>
            </tr>
            <tr>
              <th>Saturn</th>
              <td>586</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
              <td>10.7</td>
              <td>1433.5</td>
              <td>-140</td>
              <td>62</td>
              <td></td>
            </tr>
            <tr>
              <th colSpan={1} rowSpan={2}>
                Ice Giants
              </th>
              <th>Uranus</th>
              <td>86.8</td>
              <td>51,118</td>
              <td>1271</td>
              <td>8.7</td>
              <td>17.2</td>
              <td>2872.5</td>
              <td>-195</td>
              <td>27</td>
              <td></td>
            </tr>
            <tr>
              <th>Neptune</th>
              <td>102</td>
              <td>49,528</td>
              <td>1638</td>
              <td>11.0</td>
              <td>16.1</td>
              <td>4495.1</td>
              <td>-200</td>
              <td>14</td>
              <td></td>
            </tr>
            <tr>
              <th rowSpan={1} colSpan={2}>
                Dwarf Planets
              </th>
              <th>Pluto</th>
              <td>0.0146</td>
              <td>2,370</td>
              <td>2095</td>
              <td>0.7</td>
              <td>153.3</td>
              <td>5906.4</td>
              <td>-225</td>
              <td>5</td>
              <td>
                Declassified as a planet in 2006, but this{" "}
                <a
                  target="_blank"
                  href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
                >
                  remains controversial
                </a>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

interface IRootTable {
  caption: string;
  children: React.ReactNode;
}

function RootTable({ caption, children }: IRootTable) {
  return (
    <table>
      <caption>{caption}</caption>
      {children}
    </table>
  );
}

function TableHead() {
  return <thead></thead>;
}
