import styles from './Card.module.css'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

export default function AddCard({user, setUser, setNewUser}) {
  const {register, handleSubmit} = useForm();

  // const newItem = {
  //   first_name: 'Jerk',
  //   last_name: 'Sauce',
  //   job: 'Chef',
  //   description: 'Make jerk chicken tasty'
  // }

  const pushState = (item) => {
    const newState = user.concat(item);
    setUser(newState);
    setNewUser(false)
    toast('Item successfully added')
  }

	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<img 
					className={styles.card__info_img}
          alt="avatar"
					src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
				/>
				<form onSubmit={handleSubmit(pushState)} className={styles.card__info_name}>
          <div>
            <label>
              First Name
              <input {...register("first_name")} />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input {...register("last_name")} />
            </label>
          </div>
          <div>
            <label>
              Job
              <input {...register("job")} />
            </label>
          </div>
          <div>
            <label>
              Description
              <input {...register("description")} />
            </label>
          </div>
          <div className={styles.card__button}>
            <button type="submit">Create</button>
          </div>
				</form>
			</div>
		</div>
	)
}
