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

{/* <div class="max-w-none mx-auto">
        <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
          
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div class="ml-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Tom Cook
            </h3>
            <p class="text-sm text-gray-500">
              <a href="#">
                @tom_cook
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0 flex">
        <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" x-description="Heroicon name: solid/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
</svg>
          <span>
            Phone
          </span>
        </button>
        <button type="button" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
          <span>
            Email
          </span>
        </button>
      </div>
    </div>
  </div>

          
        </div>
      </div> */}