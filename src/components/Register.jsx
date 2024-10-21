import React, { useState } from 'react';
import './Register.css';
import ShowErrors from './ShowErrors';
import Validator from 'validatorjs';

const Register = () => {
  const [formValue, setFormValue] = useState({
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  });

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let { nama, jurusan, gender, alamat, member } = formValue;

    let data = { nama, jurusan, gender, alamat, member };

    let rules = {
      nama: 'required',
      jurusan: 'required',
      gender: 'required',
      alamat: 'required',
    };

    const validator = new Validator(data, rules);

    if (validator.passes()) {
      setErrors([]);

      setTimeout(() => {
        alert(`
        Data Form
        Nama : ${nama}
        Jurusan : ${jurusan}
        Gender: ${gender}
        Alamat : ${alamat}
        Member : ${member ? 'IYA' : 'TIDAK'}`);
      }, 50);
    } else {
      setErrors([
        ...validator.errors.get('nama'),
        ...validator.errors.get('jurusan'),
        ...validator.errors.get('gender'),
        ...validator.errors.get('alamat'),
      ]);
    }
  };

  return (
    <div className="outer-wrapper">
      {errors && <ShowErrors errors={errors} />}

      <form className="form-control" onSubmit={handleSubmit}>
        <label>
          <p>Nama: </p>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Masukkan nama..."
            value={formValue.nama}
            onChange={(e) =>
              setFormValue((prevState) => ({
                ...prevState,
                nama: e.target.value,
              }))
            }
          />
        </label>
        <label>
          <p>Jurusan: </p>
          <select
            name="jurusan"
            id="jurusan"
            value={formValue.jurusan}
            onChange={(e) =>
              setFormValue((prevState) => ({
                ...prevState,
                jurusan: e.target.value,
              }))
            }
          >
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">
              Desain Komunikasi Visual
            </option>
          </select>
        </label>
        <label>
          <p>Jenis Kelamin :</p>
          <div className="radio-wrapper">
            <div className="radio-input">
              <input
                type="radio"
                name="gender"
                id="pria"
                value="Pria"
                onChange={(e) =>
                  setFormValue((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
              <label htmlFor="pria">Pria</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                name="gender"
                id="wanita"
                value="Wanita"
                onChange={(e) =>
                  setFormValue((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
              <label htmlFor="wanita">Wanita</label>
            </div>
          </div>
        </label>
        <label>
          <p>Alamat :</p>
          <textarea
            name="alamat"
            id="alamat"
            rows="6"
            placeholder="Masukkan alamat..."
            value={formValue.alamat}
            onChange={(e) =>
              setFormValue((prevState) => ({
                ...prevState,
                alamat: e.target.value,
              }))
            }
          ></textarea>
        </label>
        <label>
          <div className="checkbox-wrapper">
            <span>Member</span>{' '}
            <input
              type="checkbox"
              name="member"
              id="member"
              value={formValue.member}
              onChange={(e) =>
                setFormValue((prevState) => ({
                  ...prevState,
                  member: e.target.checked,
                }))
              }
            />
          </div>
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
