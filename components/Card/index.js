import styles from './Card.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

export default function Card({person, index, handleRemoveItem, handleUpdateItem}) {
	const [edit, setEdit] = useState(false)
	const {register, handleSubmit} = useForm();

	const pushState = (item) => {
    handleUpdateItem(item, index)
		setEdit(false)
  }

	return !edit ? (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<img 
					className={styles.card__info_img}
					alt="avatar"
					src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
				/>
				<div
					className={styles.card__info_name}
				>
					<div>
						{person.first_name} {person.last_name}
					</div>
					<div>
						{person.job} 
					</div>
					<div>
						{person.description} 
					</div>
				</div>
			</div>
			<div className={styles.card__button}>
				<button onClick={() => setEdit(!edit)}>Edit</button>
				<button onClick={() => handleRemoveItem(person.first_name, person.last_name)}>Delete</button>
			</div>
		</div>
	) : (
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
				<button type="submit">Submit</button>
			</div>
		</form>
	)
}