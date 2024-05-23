export const Calculator = () => {
  return (
    <>
      <div className="side-bar">
        <h1 className="side-head">Online Assignment Help</h1>
        <p className="side-subhead">Buy Assignment Writing Help Online</p>
        <form
          method="post"
          onsubmit="return bannerForm(this)"
          action="https://customerpanel.globalassignmenthelp.com/order"
          id="bannerform"
        >
          <div className="form-box">
            <div className="loader" style={{}}>
              <div className="box select_services">
                <label
                  htmlFor="ass_group_list"
                  style={{ left: "-9999em", opacity: 0, position: "absolute" }}
                >
                  Enter Email
                </label>
                <select
                  id="ass_group_list"
                  aria-label="assignment"
                  name="group_id"
                  onchange="get_subject_list(this, `https://www.globalassignmenthelp.com/`, ``)"
                  data-type="blank"
                  style={{ color: "rgb(29, 29, 29)" }}
                >
                  <option unit_tag="Pages | Words" value="">
                    Select Services
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Assignment"
                    value={1}
                    undefined=""
                  >
                    Assignment
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Coursework"
                    value={1}
                    undefined=""
                  >
                    Coursework
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Homework"
                    value={1}
                    undefined=""
                  >
                    Homework
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Term Paper"
                    value={1}
                    undefined=""
                  >
                    Term Paper
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Research Paper"
                    value={2}
                    undefined=""
                  >
                    Research Paper
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Research Proposal"
                    value={2}
                    undefined=""
                  >
                    Research Proposal
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Personal Statement"
                    value={1}
                    undefined=""
                  >
                    Personal Statement
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Case Study"
                    value={14}
                    undefined=""
                  >
                    Case Study
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Report Writing"
                    value={14}
                    undefined=""
                  >
                    Report Writing
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Dissertation"
                    value={2}
                    undefined=""
                  >
                    Dissertation
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="PHD Thesis"
                    value={2}
                    undefined=""
                  >
                    PHD Thesis
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Dissertation Proposal"
                    value={2}
                    undefined=""
                  >
                    Dissertation Proposal
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Editing | Proofreading"
                    value={5}
                    undefined=""
                  >
                    Editing | Proofreading
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Paraphrasing"
                    value={5}
                    undefined=""
                  >
                    Paraphrasing
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Business Plan"
                    value={13}
                    undefined=""
                  >
                    Business Plan
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Essay"
                    value={16}
                    undefined=""
                  >
                    Essay
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Resume / CV Services"
                    value={11}
                    undefined=""
                  >
                    Resume / CV Services
                  </option>
                  <option
                    unit_tag="Slides"
                    data-key="PowerPoint Presentation"
                    value={8}
                    undefined=""
                  >
                    PowerPoint Presentation
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Plagiarism Report"
                    value={17}
                    undefined=""
                  >
                    Plagiarism Report
                  </option>
                  <option
                    unit_tag="Poster"
                    data-key="Poster"
                    value={9}
                    undefined=""
                  >
                    Poster
                  </option>
                  <option
                    unit_tag="Leaflet"
                    data-key="Leaflet"
                    value={10}
                    undefined=""
                  >
                    Leaflet
                  </option>
                  <option
                    unit_tag="Que. | Word/Que."
                    data-key="Online Exam | Question based test Papers"
                    value={4}
                    undefined=""
                  >
                    Online Exam | Question based test Papers
                  </option>
                  <option
                    unit_tag="Que. | Word/Que."
                    data-key="Multiple Choice Questions"
                    value={15}
                    undefined=""
                  >
                    Multiple Choice Questions
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Summary Writing"
                    value={6}
                    undefined=""
                  >
                    Summary Writing
                  </option>
                  <option
                    unit_tag="Pages | Words"
                    data-key="Portfolio"
                    value={7}
                    undefined=""
                  >
                    Portfolio
                  </option>
                </select>
                <div className="hd">
                  <input
                    type="hidden"
                    defaultValue={1}
                    name="doctype_id"
                    className="assignment"
                    id="assignment"
                  />
                  <input
                    type="hidden"
                    defaultValue="Pages | Words"
                    name="group_unit_hidden"
                    id="group_unit_hidden"
                    className="group_unit_hidden"
                  />
                  <input
                    type="hidden"
                    defaultValue="Homework"
                    name="assignment_service"
                    className=""
                    id="assignment_service"
                  />
                  <input
                    type="hidden"
                    name="file_name_arr[]"
                    defaultValue=""
                    id="order_file"
                  />
                  <input
                    type="hidden"
                    name="filewords"
                    defaultValue=""
                    id="filewords"
                  />
                  <input
                    id="words"
                    name="words"
                    type="hidden"
                    defaultValue={1000}
                  />
                  <input
                    type="hidden"
                    id="units"
                    name="units"
                    defaultValue="Select 1 Page  / 250 Words  2 Pages   / 500 Words  3 Pages   / 750 Words  4 Pages   / 1000 Words  5 Pages   / 1250 Words  6 Pages   / 1500 Words  7 Pages   / 1750 Words  8 Pages   / 2000 Words  9 Pages   / 2250 Words  10 Pages   / 2500 Words  11 Pages   / 2750 Words  12 Pages   / 3000 Words  13 Pages   / 3250 Words  14 Pages   / 3500 Words  15 Pages   / 3750 Words  16 Pages   / 4000 Words  17 Pages   / 4250 Words  18 Pages   / 4500 Words  19 Pages   / 4750 Words  20 Pages   / 5000 Words  21 Pages   / 5250 Words  22 Pages   / 5500 Words  23 Pages   / 5750 Words  24 Pages   / 6000 Words  25 Pages   / 6250 Words  26 Pages   / 6500 Words  27 Pages   / 6750 Words  28 Pages   / 7000 Words  29 Pages   / 7250 Words  30 Pages   / 7500 Words  40 Pages   / 10000 Words  50 Pages   / 12500 Words  60 Pages   / 15000 Words  70 Pages   / 17500 Words  80 Pages   / 20000 Words  90 Pages   / 22500 Words  100 Pages   / 25000 Words  110 Pages   / 27500 Words  120 Pages   / 30000 Words  130 Pages   / 32500 Words  140 Pages   / 35000 Words  150 Pages   / 37500 Words  160 Pages   / 40000 Words  180 Pages   / 45000 Words  200 Pages   / 50000 Words  250 Pages   / 62500 Words "
                  />
                </div>
              </div>
              <div className="box subject_list" id="get_subject">
                <select
                  id="assignment_subject"
                  name="assignment_subject"
                  aria-label="assignment_subject"
                  className="chosen-select"
                  onchange="ass_select(this.value, 'Pages | Words', '1 ', '250', '', '');sle_sub_name(this);set_level()"
                  data-type="blank"
                  style={{ color: "rgb(29, 29, 29)" }}
                >
                  <option value="">Select Subject</option>
                  <optgroup label="Management">
                    <option
                      data-level={1}
                      sub_id={93}
                      data-addonprice={0}
                      value={1}
                    >
                      Economics (theory)
                    </option>
                    <option
                      data-level={1}
                      sub_id={44}
                      data-addonprice={0}
                      value={1}
                    >
                      Leisure Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={82}
                      data-addonprice={0}
                      value={1}
                    >
                      Human Resource
                    </option>
                    <option
                      data-level={1}
                      sub_id={34}
                      data-addonprice={0}
                      value={1}
                    >
                      Housing
                    </option>
                    <option
                      data-level={1}
                      sub_id={86}
                      data-addonprice={0}
                      value={1}
                    >
                      Operations
                    </option>
                    <option
                      data-level={1}
                      sub_id={25}
                      data-addonprice={0}
                      value={1}
                    >
                      Fashion
                    </option>
                    <option
                      data-level={1}
                      sub_id={24}
                      data-addonprice={0}
                      value={1}
                    >
                      Estate Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={35}
                      data-addonprice={0}
                      value={1}
                    >
                      Human Resource Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={90}
                      data-addonprice={0}
                      value={1}
                    >
                      Reflective
                    </option>
                    <option
                      data-level={1}
                      sub_id={46}
                      data-addonprice={0}
                      value={1}
                    >
                      Other Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={47}
                      data-addonprice={0}
                      value={1}
                    >
                      Marketing
                    </option>
                    <option
                      data-level={1}
                      sub_id={79}
                      data-addonprice={0}
                      value={1}
                    >
                      Leadership
                    </option>
                    <option
                      data-level={1}
                      sub_id={78}
                      data-addonprice={1000}
                      value={1}
                    >
                      Research Methodology
                    </option>
                    <option
                      data-level={1}
                      sub_id={10}
                      data-addonprice={0}
                      value={1}
                    >
                      Communication
                    </option>
                    <option
                      data-level={1}
                      sub_id={36}
                      data-addonprice={0}
                      value={1}
                    >
                      Human Rights
                    </option>
                    <option
                      data-level={1}
                      sub_id={39}
                      data-addonprice={0}
                      value={1}
                    >
                      International Relations
                    </option>
                    <option
                      data-level={1}
                      sub_id={6}
                      data-addonprice={0}
                      value={1}
                    >
                      Business
                    </option>
                    <option
                      data-level={1}
                      sub_id={40}
                      data-addonprice={0}
                      value={1}
                    >
                      International Studies
                    </option>
                    <option
                      data-level={1}
                      sub_id={37}
                      data-addonprice={0}
                      value={2}
                    >
                      Information Systems
                    </option>
                    <option
                      data-level={1}
                      sub_id={62}
                      data-addonprice={2200}
                      value={2}
                    >
                      Project Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={94}
                      data-addonprice={3500}
                      value={2}
                    >
                      Economics (calculative)
                    </option>
                    <option
                      data-level={1}
                      sub_id={133}
                      data-addonprice={0}
                      value={3}
                    >
                      Small Business Enterprise
                    </option>
                  </optgroup>
                  <optgroup label="Finance">
                    <option
                      data-level={1}
                      sub_id={72}
                      data-addonprice={0}
                      value={1}
                    >
                      Statistics
                    </option>
                    <option
                      data-level={1}
                      sub_id={27}
                      data-addonprice={1500}
                      value={1}
                    >
                      Financial Management
                    </option>
                    <option
                      data-level={1}
                      sub_id={87}
                      data-addonprice={0}
                      value={1}
                    >
                      Accounts
                    </option>
                    <option
                      data-level={1}
                      sub_id={9}
                      data-addonprice={0}
                      value={1}
                    >
                      Commerce
                    </option>
                    <option
                      data-level={1}
                      sub_id={98}
                      data-addonprice={6500}
                      value={2}
                    >
                      Eviews
                    </option>
                    <option
                      data-level={1}
                      sub_id={97}
                      data-addonprice={6500}
                      value={2}
                    >
                      SAS
                    </option>
                    <option
                      data-level={1}
                      sub_id={96}
                      data-addonprice={6500}
                      value={2}
                    >
                      NVIVO
                    </option>
                    <option
                      data-level={1}
                      sub_id={95}
                      data-addonprice={3500}
                      value={2}
                    >
                      SPSS
                    </option>
                  </optgroup>
                  <optgroup label="Tourism">
                    <option
                      data-level={1}
                      sub_id={84}
                      data-addonprice={0}
                      value={1}
                    >
                      Travel &amp; Tourism
                    </option>
                    <option
                      data-level={1}
                      sub_id={80}
                      data-addonprice={0}
                      value={1}
                    >
                      Food
                    </option>
                    <option
                      data-level={1}
                      sub_id={76}
                      data-addonprice={0}
                      value={1}
                    >
                      Tourism
                    </option>
                    <option
                      data-level={1}
                      sub_id={81}
                      data-addonprice={0}
                      value={1}
                    >
                      Hospitality
                    </option>
                  </optgroup>
                  <optgroup label="Law">
                    <option
                      data-level={1}
                      sub_id={43}
                      data-addonprice={1000}
                      value={1}
                    >
                      Law
                    </option>
                    <option
                      data-level={1}
                      sub_id={131}
                      data-addonprice={1000}
                      value={1}
                    >
                      Legal Aspects
                    </option>
                    <option
                      data-level={1}
                      sub_id={129}
                      data-addonprice={1000}
                      value={1}
                    >
                      Legal
                    </option>
                    <option
                      data-level={1}
                      sub_id={130}
                      data-addonprice={1000}
                      value={1}
                    >
                      Business Law
                    </option>
                  </optgroup>
                  <optgroup label="Health ">
                    <option
                      data-level={1}
                      sub_id={31}
                      data-addonprice={0}
                      value={1}
                    >
                      Health
                    </option>
                    <option
                      data-level={1}
                      sub_id={85}
                      data-addonprice={0}
                      value={1}
                    >
                      Healthcare
                    </option>
                    <option
                      data-level={1}
                      sub_id={32}
                      data-addonprice={0}
                      value={1}
                    >
                      Health &amp; Social Care
                    </option>
                    <option
                      data-level={1}
                      sub_id={100}
                      data-addonprice={1500}
                      value={1}
                    >
                      Pharmacy
                    </option>
                    <option
                      data-level={1}
                      sub_id={51}
                      data-addonprice={0}
                      value={1}
                    >
                      Medical
                    </option>
                    <option
                      data-level={1}
                      sub_id={8}
                      data-addonprice={0}
                      value={1}
                    >
                      Childcare
                    </option>
                    <option
                      data-level={1}
                      sub_id={54}
                      data-addonprice={0}
                      value={1}
                    >
                      Nursing
                    </option>
                    <option
                      data-level={1}
                      sub_id={59}
                      data-addonprice={2000}
                      value={1}
                    >
                      Physiology
                    </option>
                    <option
                      data-level={1}
                      sub_id={57}
                      data-addonprice={0}
                      value={1}
                    >
                      Physical Education
                    </option>
                    <option
                      data-level={1}
                      sub_id={102}
                      data-addonprice={2000}
                      value={2}
                    >
                      Biotechnology
                    </option>
                    <option
                      data-level={1}
                      sub_id={104}
                      data-addonprice={10000}
                      value={3}
                    >
                      Lab-Report
                    </option>
                  </optgroup>
                  <optgroup label="Arts & Humanities">
                    <option
                      data-level={1}
                      sub_id={67}
                      data-addonprice={0}
                      value={1}
                    >
                      Social Policy
                    </option>
                    <option
                      data-level={1}
                      sub_id={68}
                      data-addonprice={0}
                      value={1}
                    >
                      Social Work
                    </option>
                    <option
                      data-level={1}
                      sub_id={69}
                      data-addonprice={0}
                      value={1}
                    >
                      Sociology
                    </option>
                    <option
                      data-level={1}
                      sub_id={71}
                      data-addonprice={0}
                      value={1}
                    >
                      Sports
                    </option>
                    <option
                      data-level={1}
                      sub_id={52}
                      data-addonprice={0}
                      value={1}
                    >
                      Military
                    </option>
                    <option
                      data-level={1}
                      sub_id={75}
                      data-addonprice={0}
                      value={1}
                    >
                      Theology
                    </option>
                    <option
                      data-level={1}
                      sub_id={91}
                      data-addonprice={0}
                      value={1}
                    >
                      Psychology
                    </option>
                    <option
                      data-level={1}
                      sub_id={63}
                      data-addonprice={0}
                      value={1}
                    >
                      Property
                    </option>
                    <option
                      data-level={1}
                      sub_id={4}
                      data-addonprice={0}
                      value={1}
                    >
                      Arts
                    </option>
                    <option
                      data-level={1}
                      sub_id={13}
                      data-addonprice={0}
                      value={1}
                    >
                      Criminology
                    </option>
                    <option
                      data-level={1}
                      sub_id={23}
                      data-addonprice={0}
                      value={1}
                    >
                      Environmental Studies
                    </option>
                    <option
                      data-level={1}
                      sub_id={28}
                      data-addonprice={0}
                      value={1}
                    >
                      General Studies
                    </option>
                    <option
                      data-level={1}
                      sub_id={29}
                      data-addonprice={0}
                      value={1}
                    >
                      Geography
                    </option>
                    <option
                      data-level={1}
                      sub_id={33}
                      data-addonprice={0}
                      value={1}
                    >
                      History
                    </option>
                    <option
                      data-level={1}
                      sub_id={2}
                      data-addonprice={0}
                      value={1}
                    >
                      Anthropology
                    </option>
                    <option
                      data-level={1}
                      sub_id={65}
                      data-addonprice={0}
                      value={1}
                    >
                      Religion
                    </option>
                    <option
                      data-level={1}
                      sub_id={60}
                      data-addonprice={0}
                      value={1}
                    >
                      Politics
                    </option>
                    <option
                      data-level={1}
                      sub_id={55}
                      data-addonprice={0}
                      value={1}
                    >
                      Philosophy
                    </option>
                    <option
                      data-level={1}
                      sub_id={103}
                      data-addonprice={2000}
                      value={3}
                    >
                      Geology
                    </option>
                  </optgroup>
                  <optgroup label="Education">
                    <option
                      data-level={1}
                      sub_id={77}
                      data-addonprice={0}
                      value={1}
                    >
                      Translation
                    </option>
                    <option
                      data-level={1}
                      sub_id={18}
                      data-addonprice={0}
                      value={1}
                    >
                      Education
                    </option>
                    <option
                      data-level={1}
                      sub_id={73}
                      data-addonprice={0}
                      value={1}
                    >
                      Teaching
                    </option>
                  </optgroup>
                  <optgroup label="Languages ">
                    <option
                      data-level={1}
                      sub_id={45}
                      data-addonprice={0}
                      value={1}
                    >
                      Linguistics
                    </option>
                    <option
                      data-level={1}
                      sub_id={22}
                      data-addonprice={1500}
                      value={1}
                    >
                      English Literature
                    </option>
                    <option
                      data-level={1}
                      sub_id={21}
                      data-addonprice={0}
                      value={1}
                    >
                      English Language
                    </option>
                    <option
                      data-level={1}
                      sub_id={30}
                      data-addonprice={2500}
                      value={2}
                    >
                      German
                    </option>
                    <option
                      data-level={1}
                      sub_id={42}
                      data-addonprice={0}
                      value={2}
                    >
                      Languages
                    </option>
                    <option
                      data-level={1}
                      sub_id={61}
                      data-addonprice={2500}
                      value={2}
                    >
                      Portuguese
                    </option>
                    <option
                      data-level={1}
                      sub_id={70}
                      data-addonprice={2500}
                      value={2}
                    >
                      Spanish
                    </option>
                  </optgroup>
                  <optgroup label="Culture & Drama">
                    <option
                      data-level={1}
                      sub_id={74}
                      data-addonprice={0}
                      value={1}
                    >
                      Theatre
                    </option>
                    <option
                      data-level={1}
                      sub_id={41}
                      data-addonprice={0}
                      value={1}
                    >
                      Journalism
                    </option>
                    <option
                      data-level={1}
                      sub_id={26}
                      data-addonprice={0}
                      value={1}
                    >
                      Film Studies
                    </option>
                    <option
                      data-level={1}
                      sub_id={56}
                      data-addonprice={0}
                      value={1}
                    >
                      Photography
                    </option>
                    <option
                      data-level={1}
                      sub_id={92}
                      data-addonprice={0}
                      value={1}
                    >
                      Film Review
                    </option>
                    <option
                      data-level={1}
                      sub_id={16}
                      data-addonprice={0}
                      value={1}
                    >
                      Drama
                    </option>
                    <option
                      data-level={1}
                      sub_id={14}
                      data-addonprice={0}
                      value={1}
                    >
                      Cultural Studies
                    </option>
                    <option
                      data-level={1}
                      sub_id={50}
                      data-addonprice={0}
                      value={1}
                    >
                      Media
                    </option>
                    <option
                      data-level={1}
                      sub_id={53}
                      data-addonprice={0}
                      value={1}
                    >
                      Music
                    </option>
                  </optgroup>
                  <optgroup label="Science">
                    <option
                      data-level={1}
                      sub_id={49}
                      data-addonprice={7500}
                      value={1}
                    >
                      Mechanics
                    </option>
                    <option
                      data-level={1}
                      sub_id={7}
                      data-addonprice={6500}
                      value={2}
                    >
                      Chemistry
                    </option>
                    <option
                      data-level={1}
                      sub_id={66}
                      data-addonprice={6500}
                      value={2}
                    >
                      Other Science
                    </option>
                    <option
                      data-level={1}
                      sub_id={58}
                      data-addonprice={6500}
                      value={2}
                    >
                      Physics
                    </option>
                    <option
                      data-level={1}
                      sub_id={48}
                      data-addonprice={6500}
                      value={2}
                    >
                      Mathematics
                    </option>
                    <option
                      data-level={1}
                      sub_id={38}
                      data-addonprice={6500}
                      value={2}
                    >
                      Information Technology
                    </option>
                    <option
                      data-level={1}
                      sub_id={11}
                      data-addonprice={6500}
                      value={2}
                    >
                      Computer Science
                    </option>
                    <option
                      data-level={1}
                      sub_id={5}
                      data-addonprice={6500}
                      value={2}
                    >
                      Biology
                    </option>
                    <option
                      data-level={1}
                      sub_id={3}
                      data-addonprice={7500}
                      value={3}
                    >
                      Architecture
                    </option>
                    <option
                      data-level={1}
                      sub_id={12}
                      data-addonprice={7500}
                      value={3}
                    >
                      Construction
                    </option>
                  </optgroup>
                  <optgroup label="Programming ">
                    <option
                      data-level={1}
                      sub_id={105}
                      data-addonprice={12000}
                      value={2}
                    >
                      IT-Networking
                    </option>
                    <option
                      data-level={1}
                      sub_id={112}
                      data-addonprice={12000}
                      value={2}
                    >
                      Operating System
                    </option>
                    <option
                      data-level={1}
                      sub_id={121}
                      data-addonprice={12000}
                      value={2}
                    >
                      Data Mining
                    </option>
                    <option
                      data-level={1}
                      sub_id={113}
                      data-addonprice={12000}
                      value={3}
                    >
                      MATLAB
                    </option>
                    <option
                      data-level={1}
                      sub_id={111}
                      data-addonprice={12000}
                      value={3}
                    >
                      Linux
                    </option>
                    <option
                      data-level={1}
                      sub_id={110}
                      data-addonprice={12000}
                      value={3}
                    >
                      Python
                    </option>
                    <option
                      data-level={1}
                      sub_id={109}
                      data-addonprice={12000}
                      value={3}
                    >
                      Other Programming
                    </option>
                    <option
                      data-level={1}
                      sub_id={108}
                      data-addonprice={12000}
                      value={3}
                    >
                      iOS Application
                    </option>
                    <option
                      data-level={1}
                      sub_id={107}
                      data-addonprice={12000}
                      value={3}
                    >
                      Android Application
                    </option>
                    <option
                      data-level={1}
                      sub_id={106}
                      data-addonprice={12000}
                      value={3}
                    >
                      Web Application
                    </option>
                    <option
                      data-level={1}
                      sub_id={122}
                      data-addonprice={12000}
                      value={3}
                    >
                      Simulation
                    </option>
                    <option
                      data-level={1}
                      sub_id={123}
                      data-addonprice={12000}
                      value={3}
                    >
                      Data Visualization
                    </option>
                    <option
                      data-level={1}
                      sub_id={124}
                      data-addonprice={12000}
                      value={3}
                    >
                      Data Modeling
                    </option>
                    <option
                      data-level={1}
                      sub_id={132}
                      data-addonprice={10000}
                      value={3}
                    >
                      Database / SQL
                    </option>
                    <option
                      data-level={1}
                      sub_id={1}
                      data-addonprice={12000}
                      value={3}
                    >
                      Animation
                    </option>
                  </optgroup>
                  <optgroup label="Engineering ">
                    <option
                      data-level={1}
                      sub_id={115}
                      data-addonprice={10000}
                      value={3}
                    >
                      Mechanical Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={120}
                      data-addonprice={10000}
                      value={3}
                    >
                      Oil&amp;Gas Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={119}
                      data-addonprice={10000}
                      value={3}
                    >
                      IT/ Software Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={118}
                      data-addonprice={10000}
                      value={3}
                    >
                      Electical Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={117}
                      data-addonprice={10000}
                      value={3}
                    >
                      Electronics Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={116}
                      data-addonprice={10000}
                      value={3}
                    >
                      Chemical Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={19}
                      data-addonprice={10000}
                      value={3}
                    >
                      Other Engineering
                    </option>
                    <option
                      data-level={1}
                      sub_id={114}
                      data-addonprice={10000}
                      value={3}
                    >
                      Civil Engineering
                    </option>
                  </optgroup>
                </select>
                <input
                  type="hidden"
                  id="assignment_subject_nm"
                  name="assignment_subject_nm"
                  readOnly=""
                  defaultValue="Marketing"
                />
              </div>
              <span
                className="select-box"
                id="q_w_calcu"
                style={{ display: "none" }}
              >
                <div className="box select-bx select-bx-half select-bx-last questions_online_exam">
                  <select id="no_of_q" aria-label="no_of_q">
                    <option selected="" value={1}>
                      1 Questions
                    </option>
                  </select>
                </div>
                <div className="box select-bx select-bx-half questions_words">
                  <select id="no_of_w" aria-label="no_of_w">
                    <option selected="" value={50}>
                      50 Words/Question
                    </option>
                  </select>
                </div>
              </span>
              <div
                className="box select-bx select-bx-half page_words"
                id="pages_count_parent"
              >
                <select
                  id="pages_count"
                  name="pages"
                  onchange="price_calculater_order()"
                  aria-label="pages"
                  style={{ color: "rgb(29, 29, 29)" }}
                >
                  <option value="" disabled="">
                    Select
                  </option>
                  <option value={1} selected="">
                    1 Page / 250 Words
                  </option>
                  <option value={2}>2 Pages / 500 Words</option>
                  <option value={3}>3 Pages / 750 Words</option>
                  <option value={4}>4 Pages / 1000 Words</option>
                  <option value={5}>5 Pages / 1250 Words</option>
                  <option value={6}>6 Pages / 1500 Words</option>
                  <option value={7}>7 Pages / 1750 Words</option>
                  <option value={8}>8 Pages / 2000 Words</option>
                  <option value={9}>9 Pages / 2250 Words</option>
                  <option value={10}>10 Pages / 2500 Words</option>
                  <option value={11}>11 Pages / 2750 Words</option>
                  <option value={12}>12 Pages / 3000 Words</option>
                  <option value={13}>13 Pages / 3250 Words</option>
                  <option value={14}>14 Pages / 3500 Words</option>
                  <option value={15}>15 Pages / 3750 Words</option>
                  <option value={16}>16 Pages / 4000 Words</option>
                  <option value={17}>17 Pages / 4250 Words</option>
                  <option value={18}>18 Pages / 4500 Words</option>
                  <option value={19}>19 Pages / 4750 Words</option>
                  <option value={20}>20 Pages / 5000 Words</option>
                  <option value={21}>21 Pages / 5250 Words</option>
                  <option value={22}>22 Pages / 5500 Words</option>
                  <option value={23}>23 Pages / 5750 Words</option>
                  <option value={24}>24 Pages / 6000 Words</option>
                  <option value={25}>25 Pages / 6250 Words</option>
                  <option value={26}>26 Pages / 6500 Words</option>
                  <option value={27}>27 Pages / 6750 Words</option>
                  <option value={28}>28 Pages / 7000 Words</option>
                  <option value={29}>29 Pages / 7250 Words</option>
                  <option value={30}>30 Pages / 7500 Words</option>
                  <option value={40}>40 Pages / 10000 Words</option>
                  <option value={50}>50 Pages / 12500 Words</option>
                  <option value={60}>60 Pages / 15000 Words</option>
                  <option value={70}>70 Pages / 17500 Words</option>
                  <option value={80}>80 Pages / 20000 Words</option>
                  <option value={90}>90 Pages / 22500 Words</option>
                  <option value={100}>100 Pages / 25000 Words</option>
                  <option value={110}>110 Pages / 27500 Words</option>
                  <option value={120}>120 Pages / 30000 Words</option>
                  <option value={130}>130 Pages / 32500 Words</option>
                  <option value={140}>140 Pages / 35000 Words</option>
                  <option value={150}>150 Pages / 37500 Words</option>
                  <option value={160}>160 Pages / 40000 Words</option>
                  <option value={180}>180 Pages / 45000 Words</option>
                  <option value={200}>200 Pages / 50000 Words</option>
                  <option value={250}>250 Pages / 62500 Words</option>
                </select>
              </div>
              <div
                className="box select-bx select-bx-half select-bx-last"
                id="urgency_drop"
              >
                <select
                  id="urgency"
                  name="urgency"
                  onchange="price_calculater_order()"
                  aria-label="urgency"
                  style={{ color: "rgb(29, 29, 29)" }}
                >
                  <option value="" disabled="">
                    -- Select Urgency --
                  </option>
                  <option value="60h">4 hours</option>
                  <option value="61h">8 hours</option>
                  <option value="62h">16 hours</option>
                  <option value={19}>1 Day</option>
                  <option value={18}>2 Days</option>
                  <option value={1}>3 Days</option>
                  <option value={2}>4 Days</option>
                  <option value={3}>5 Days</option>
                  <option value={22}>6 Days</option>
                  <option value={23}>7 Days</option>
                  <option value={24}>8 Days</option>
                  <option value={25}>9 Days</option>
                  <option value={4}>10 Days</option>
                  <option value={5}>15 Days</option>
                  <option value={6}>20 Days</option>
                  <option value={7}>25 Days</option>
                  <option selected="" value={8}>
                    30 Days
                  </option>
                </select>
              </div>
              <div className="upload_file_box" style={{ display: "none" }}>
                <button className="upload-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.506"
                    height="13.188"
                    viewBox="0 0 12.506 15.188"
                  >
                    <g transform="translate(-46.367)">
                      <path
                        d="M49.942,11.614H55.3V6.253h3.574L52.62,0,46.367,6.253h3.574v5.361ZM46.367,13.4H58.873v1.789H46.367Z"
                        transform="translate(0)"
                      />
                    </g>
                  </svg>
                  &gt;Drop file here or Click to upload
                </button>
                <input
                  type="file"
                  name="file[]"
                  id="upload_file"
                  multiple=""
                  accept=".txt, .DOCX, .DOC, .docx, .doc, .pdf, .PDf"
                />
                <span className="file-type-error" style={{ display: "none" }} />
              </div>
              <div className="upload_file_result" style={{ display: "none" }}>
                <ul className="ul_list" />
              </div>
              <div className="amount-banner">
                <div className="amnt-left">
                  <span className="off">25% Off</span>
                  <s className="real-price basePrice">PKR 12913.09</s>
                </div>
                <p className="symbole">
                  PKR <span className="value offerPrice">9685.54</span>
                </p>
              </div>
            </div>
            <div className="form-loader" style={{ display: "none" }}>
              <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-rolling lm_loader"
              >
                <circle
                  cx={50}
                  cy={50}
                  fill="none"
                  stroke="#246ED0"
                  strokeWidth={10}
                  r={35}
                  strokeDasharray="164.93361431346415 56.97787143782138"
                  transform="rotate(287.866 50 50)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
          <button type="submit" className="con_btn button mb-lg-5">
            Order Now
          </button>
        </form>
      </div>
    </>
  );
};
