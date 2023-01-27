package fr.agpm.pocs.sdr;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@RepositoryRestResource
public interface Movies extends CrudRepository<Movie, Long>, PagingAndSortingRepository<Movie, Long> {

}
