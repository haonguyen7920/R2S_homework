import "./Table.css";
const Table = () => {
  return (
    <header>
      <h1>Bảng Thông Tin</h1>
      <table>
        <tr>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Quốc gia</th>
          <th>Gia đình</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Ghi chú</th>
        </tr>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>25</td>
          <td>Việt Nam</td>
          <td>Không</td>
          <td>1998-05-10</td>
          <td>Nam</td>
          <td>Ghi chú 1</td>
        </tr>
        <tr>
          <td>Nguyễn Văn B</td>
          <td>32</td>
          <td>Mỹ</td>
          <td>Có</td>
          <td>1991-08-20</td>
          <td>Nữ</td>
          <td>Ghi chú 2</td>
        </tr>
        <tr>
          <td>Trần Văn C</td>
          <td>40</td>
          <td>Pháp</td>
          <td>Không</td>
          <td>1983-12-5</td>
          <td>Nam</td>
          <td>Ghi chú 3</td>
        </tr>
        <tr>
          <td>Phạm Thị D</td>
          <td>28</td>
          <td>Đức</td>
          <td>Không</td>
          <td>1995-07-15</td>
          <td>Nữ</td>
          <td>Ghi chú 4</td>
        </tr>
        <tr>
          <td>Lê Văn E</td>
          <td>37</td>
          <td>Anh</td>
          <td>Có</td>
          <td>1986-03-25</td>
          <td>Nam</td>
          <td>Ghi chú 5</td>
        </tr>
        <tr>
          <td>Hoàng Thị F</td>
          <td>31</td>
          <td>Hàn Quốc</td>
          <td>Có</td>
          <td>1990-09-08</td>
          <td>Nữ</td>
          <td>Ghi chú 6</td>
        </tr>
        <tr>
          <td>Nguyễn Văn G</td>
          <td>42</td>
          <td>Nhật Bản</td>
          <td>Có</td>
          <td>1979-11-18</td>
          <td>Nam</td>
          <td>Ghi chú 7</td>
        </tr>
        <tr>
          <td>Trần Thị H</td>
          <td>29</td>
          <td>Canada</td>
          <td>Không</td>
          <td>1994-06-30</td>
          <td>Nữ</td>
          <td>Ghi chú 8</td>
        </tr>
      </table>
    </header>
  );
};

export default Table;
