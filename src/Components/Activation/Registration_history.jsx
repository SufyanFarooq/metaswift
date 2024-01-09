import React from "react";

function Registration_history() {
  return (
    <div className="nft_theme">
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                My Team BV
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">My Network</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  My Team BV
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="row mt-3">
                      <div class="col-md-3">
                        <label>Choose Status</label>

                        <select
                          id="level"
                          onchange="getvalue()"
                          class="floating-input form-control select_bg "
                          data-val="true"
                          data-val-required="Position is required"
                        >
                          <option value="0">All Levels</option>
                          <option value="1">Level 1</option>
                          <option value="2">Level 2</option>
                          <option value="3">Level 3</option>
                          <option value="4">Level 4</option>
                          <option value="5">Level 5</option>
                          <option value="6">Level 6</option>
                          <option value="7">Level 7</option>
                          <option value="8">Level 8</option>
                          <option value="9">Level 9</option>
                          <option value="10">Level 10</option>
                          <option value="11">Level 11</option>
                          <option value="12">Level 12</option>
                          <option value="13">Level 13</option>
                          <option value="14">Level 14</option>
                          <option value="15">Level 15</option>
                          <option value="16">Level 16</option>
                          <option value="17">Level 17</option>
                          <option value="18">Level 18</option>
                          <option value="19">Level 19</option>
                          <option value="20">Level 20</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label>Position</label>
                        <select
                          id="status"
                          onchange="getvalue_status()"
                          class="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Position is required"
                        >
                          <option value="">Select Status</option>
                          <option value="2">All</option>
                          <option value="1">Active</option>
                          <option value="0">In-Active</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <div
                      id="myAssets_wrapper"
                      class="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <br />
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="table table-bordered mb-0 text-nowrap dataTable no-footer"
                          >
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>User ID</th>
                                <th>Level</th>
                                <th>Registration Date</th>
                                <th>Package</th>
                                <th>Activation Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>966780</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>915254</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>965196</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>680894</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>744017</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>772343</td>
                                <td>1</td>
                                <td>28/11/2022, 08:34:44 PM</td>

                                <td>100.00 USD</td>
                                <td>09/12/2022, 11:42:31 PM</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>760464</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>423455</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>636398</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>916212</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>339169</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>522760</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>924420</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>928829</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>473865</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>411620</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>391843</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>18</td>
                                <td>477594</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:28 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>19</td>
                                <td>811227</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>20</td>
                                <td>950597</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>21</td>
                                <td>475993</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>22</td>
                                <td>910398</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>23</td>
                                <td>472260</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>24</td>
                                <td>455152</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>25</td>
                                <td>833390</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>26</td>
                                <td>975989</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>27</td>
                                <td>371067</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>28</td>
                                <td>375849</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>29</td>
                                <td>962111</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>30</td>
                                <td>833156</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>31</td>
                                <td>375373</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>32</td>
                                <td>893633</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>33</td>
                                <td>498148</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>34</td>
                                <td>409254</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>35</td>
                                <td>394464</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>36</td>
                                <td>377652</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>37</td>
                                <td>342728</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>38</td>
                                <td>957445</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>39</td>
                                <td>520804</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>40</td>
                                <td>381416</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>41</td>
                                <td>154756</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>42</td>
                                <td>402689</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>43</td>
                                <td>704171</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>44</td>
                                <td>115950</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>45</td>
                                <td>668617</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:29 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>46</td>
                                <td>165288</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>47</td>
                                <td>345616</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>48</td>
                                <td>470510</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>49</td>
                                <td>156627</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>50</td>
                                <td>618084</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>51</td>
                                <td>145598</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>52</td>
                                <td>628714</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>53</td>
                                <td>472319</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>54</td>
                                <td>983374</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>55</td>
                                <td>740351</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>56</td>
                                <td>863913</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:30 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>57</td>
                                <td>860364</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>58</td>
                                <td>618351</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>59</td>
                                <td>792403</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>60</td>
                                <td>408998</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>61</td>
                                <td>451282</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>62</td>
                                <td>575474</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>63</td>
                                <td>690007</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>64</td>
                                <td>265454</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>65</td>
                                <td>848992</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>66</td>
                                <td>286004</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>67</td>
                                <td>445812</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:31 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>68</td>
                                <td>877231</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>69</td>
                                <td>179763</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>70</td>
                                <td>150700</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>71</td>
                                <td>433254</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>72</td>
                                <td>422563</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>73</td>
                                <td>715518</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>74</td>
                                <td>329012</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>75</td>
                                <td>584102</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>76</td>
                                <td>365822</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>77</td>
                                <td>172741</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>78</td>
                                <td>656191</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>79</td>
                                <td>895335</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>80</td>
                                <td>654890</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>81</td>
                                <td>119865</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>82</td>
                                <td>730187</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>83</td>
                                <td>370422</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>84</td>
                                <td>539994</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td>858398</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>86</td>
                                <td>183199</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:32 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>87</td>
                                <td>473558</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>88</td>
                                <td>416876</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>89</td>
                                <td>421533</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>90</td>
                                <td>258884</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>91</td>
                                <td>385707</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>92</td>
                                <td>442270</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>93</td>
                                <td>921273</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>94</td>
                                <td>471085</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>95</td>
                                <td>164804</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>96</td>
                                <td>948629</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>97</td>
                                <td>679194</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>98</td>
                                <td>658436</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>99</td>
                                <td>875061</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>100</td>
                                <td>256228</td>
                                <td>2</td>
                                <td>28/11/2022, 08:37:33 PM</td>

                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* <!---footer----> */}
      <div class="main-footer">
        <div class="col-md-12 col-sm-12 text-center">
          <div class="container-fluid pd-t-0 ht-100p">
            {" "}
            Copyright © 2023{" "}
            <a href="#" class="tx-primary">
              MetaSwift.ai
            </a>
            .<a href="#"> </a> All rights reserved{" "}
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>

    // </div>
  );
}

export default Registration_history;
